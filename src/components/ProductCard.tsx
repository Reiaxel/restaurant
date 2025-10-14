import { ShoppingCart, Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          ${(product.price / 100).toFixed(0)}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-blue-600 mb-2">INGREDIENTES:</p>
          <div className="flex flex-wrap gap-1">
            {product.ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          <Plus size={20} />
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
