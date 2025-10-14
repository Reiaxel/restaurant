import { useState } from 'react';
import { ShoppingCart, Flame } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { products } from './data/products';
import { Product, CartItem } from './types';
function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <header className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 shadow-2xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-lg">
                <Flame size={40} className="text-orange-500" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Hamburguesa Calle el Hambre
                </h1>
                <p className="text-orange-100 text-sm sm:text-base font-medium">
                  Las mejores hamburguesas del barrio
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <ShoppingCart size={24} />
              <span className="hidden sm:inline">Carrito</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            Nuestro Menú
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hamburguesas venezolanas preparadas al mejor estilos de las calles del hambre
            ¡Elegí tu favorita!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-3">
            Delivery en 5km a la redonda
          </h3>
          <p className="text-blue-100 text-lg">
            Recibí tu pedido en 30-45 minutos. Pedidos por WhatsApp.
          </p>
        </div>
      </main>

      <footer className="bg-black text-gray-400 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2025 Hamburguesa Calle el Hambre. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2">Pedidos: 11 3570-5613</p>
        </div>
      </footer>

      {isCartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
        />
      )}
    </div>
  );
}

export default App;
