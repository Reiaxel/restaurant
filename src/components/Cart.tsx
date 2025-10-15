// src/components/Cart.tsx
import { useState, useRef } from "react";
import { X, ShoppingBag, Loader2, Minus, Plus } from "lucide-react";
import { CartItem } from "../types";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

// Coordenadas del restaurante (Av. La Plata 417, Caballito, CABA)
const storeLat = -34.6188;
const storeLon = -58.4331;
const maxDistanceKm = 5;

// Variable de entorno con tu API key
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export function Cart({ items, onClose, onUpdateQuantity, onRemoveItem }: CartProps) {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    lat: 0,
    lng: 0,
  });
  const [addressError, setAddressError] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Función para calcular distancia en km usando Haversine
  const getDistanceFromLatLonInKm = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const isAddressWithinDeliveryRadius = (lat: number, lng: number) => {
    const distance = getDistanceFromLatLonInKm(lat, lng, storeLat, storeLon);
    return distance <= maxDistanceKm;
  };

  // Cuando el usuario selecciona una dirección de Google
  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place?.geometry?.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setCustomerInfo({ ...customerInfo, lat, lng, address: place.formatted_address || "" });
      setAddressError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAddressError("");
    setIsValidating(true);

    if (!customerInfo.lat || !customerInfo.lng) {
      setAddressError("Por favor seleccioná una dirección válida desde las sugerencias.");
      setIsValidating(false);
      return;
    }

    const withinRadius = isAddressWithinDeliveryRadius(customerInfo.lat, customerInfo.lng);

    setIsValidating(false);

    if (!withinRadius) {
      setAddressError(`❌ Estás fuera del radio de entrega (${maxDistanceKm} km desde el local).`);
      return;
    }

    // Crear mensaje para WhatsApp
    const orderDetails = items
      .map(
        (item) =>
          `*${item.quantity}x ${item.product.name}* - $${((item.product.price * item.quantity) / 100).toFixed(0)}`
      )
      .join("%0A");

    const message = `*NUEVO PEDIDO - Hamburguesa Calle el Hambre*%0A%0A` +
      `*Cliente:* ${customerInfo.name}%0A` +
      `*Teléfono:* ${customerInfo.phone}%0A` +
      `*Dirección:* ${customerInfo.address}%0A%0A` +
      `*PEDIDO:*%0A${orderDetails}%0A%0A` +
      `*TOTAL: $${(total / 100).toFixed(0)}*`;

    window.open(`https://wa.me/5491135705613?text=${message}`, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <ShoppingBag size={64} className="mx-auto mb-4 text-gray-300" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-6">Agregá algunas hamburguesas para empezar</p>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            Ver Menú
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full my-8 shadow-2xl">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Tu Pedido</h2>
          <button onClick={onClose} className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4 mb-4 pb-4 border-b border-gray-200">
              <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{item.product.name}</h3>
                <p className="text-orange-600 font-semibold">${(item.product.price / 100).toFixed(0)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)} className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-all">
                    <Minus size={16} />
                  </button>
                  <span className="font-bold w-8 text-center">{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)} className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-1 transition-all">
                    <Plus size={16} />
                  </button>
                  <button onClick={() => onRemoveItem(item.product.id)} className="ml-auto text-red-500 hover:text-red-700 text-sm font-semibold">
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 bg-gray-50">
          <div className="flex justify-between items-center text-xl font-bold mb-6">
            <span>Total:</span>
            <span className="text-orange-600">${(total / 100).toFixed(0)}</span>
          </div>

          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                <input type="text" required value={customerInfo.name} onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Tu Nombre" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                <input type="tel" required value={customerInfo.phone} onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="11 1234 567" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Dirección de Entrega</label>
                <Autocomplete onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)} onPlaceChanged={handlePlaceChanged}>
                  <input type="text" required value={customerInfo.address} onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })} className={`w-full px-4 py-3 rounded-lg border ${addressError ? "border-red-500" : "border-gray-300"} focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all`} placeholder="Calle y número, Ciudad" />
                </Autocomplete>
                {addressError && <p className="text-red-600 text-sm mt-2 font-semibold">{addressError}</p>}
                <p className="text-xs text-gray-500 mt-1">Solo realizamos envíos dentro de {maxDistanceKm} km a la redonda</p>
              </div>

              <button type="submit" disabled={isValidating} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isValidating ? <><Loader2 className="animate-spin" size={20} /> Validando dirección...</> : <><ShoppingBag size={20} /> Enviar Pedido por WhatsApp</>}
              </button>
            </form>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}
