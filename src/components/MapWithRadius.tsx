// src/components/MapWithRadius.tsx

import { MapContainer, TileLayer, Marker, Circle, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import { getDistanceFromLatLonInKm, isAddressWithinDeliveryRadius } from '../utils/distance';

const storeLat = -34.6037; // Buenos Aires
const storeLon = -58.3816;
const maxDistanceKm = 5;

const StorePosition: [number, number] = [storeLat, storeLon];

function ClickHandler({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onMapClick(lat, lng);
    },
  });
  return null;
}

const MapWithRadius = () => {
  const [addressPosition, setAddressPosition] = useState<[number, number] | null>(null);

  const distance =
    addressPosition !== null
      ? getDistanceFromLatLonInKm(addressPosition[0], addressPosition[1], storeLat, storeLon)
      : null;

  const withinRadius =
    distance !== null ? isAddressWithinDeliveryRadius(
      addressPosition![0],
      addressPosition![1],
      storeLat,
      storeLon,
      maxDistanceKm
    ) : null;

  return (
    <div>
      <MapContainer center={StorePosition} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Círculo de radio de entrega */}
        <Circle
          center={StorePosition}
          radius={maxDistanceKm * 1000}
          color="blue"
          fillOpacity={0.1}
        />

        {/* Marcador de la tienda */}
        <Marker position={StorePosition} />

        {/* Marcador de la dirección del usuario */}
        {addressPosition && <Marker position={addressPosition} />}

        {/* Captura clics */}
        <ClickHandler onMapClick={(lat, lng) => setAddressPosition([lat, lng])} />
      </MapContainer>

      {addressPosition && (
        <div style={{ marginTop: '1rem' }}>
          <p>📍 Dirección seleccionada: {addressPosition[0].toFixed(5)}, {addressPosition[1].toFixed(5)}</p>
          <p>📏 Distancia: {distance?.toFixed(2)} km</p>
          <p>
            {withinRadius
              ? '✅ Está dentro del radio de entrega.'
              : '❌ Está fuera del radio de entrega.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default MapWithRadius;
