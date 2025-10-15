import { Product } from '../types';




export const products: Product[] = [
  {
    id: 1,
    name: ' clasica',
  description:'',
    price: 1000000,
    image: '/imagenes/burguerclasica.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['carne 120g','Pan', 'Carne 120g', 'Lechuga', 'Tomate', 'Cebolla', 'Queso ,huevo', 'Salsa ketchup mayonesa mostaza ajo'],
    category: 'Clásicas'
  },
  {
    id: 2,
    name: ' chuleta ahumada',
  description:'',
    price: 1000000,
    image: '/imagenes/bueguerchuleta.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['chuleta ahumada 120g','Pan', 'maiz', 'Lechuga', 'Tomate', 'Cebolla','jamon', 'Queso', 'Salsa ketchup mayonesa mostaza ajo'],
    category: 'Clásicas'
  },
  {
    id: 3,
    name: 'Doble Carne',
    description: '',
    price: 1300000,
    image: '/imagenes/burguerDoble.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Doble carne 120g', 'Lechuga', 'Tomate', 'Cebolla', 'Doble queso', 'jamon','panceta','huevo', 'papas pay', 'salsas ketchup mayo mostaza ajo'],
    category: 'Especiales'
  },
  {
    id: 4,
    name: 'hamburguesa de pollo',
    description: '',
    price: 1000000,
    image: '/imagenes/burguerPollo.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['medallon de pollo','lechuga', 'tomate', 'cebolla', 'papas pay', 'huevo', 'queso','jamon', 'ketchup', 'mayo', 'mostaza',
      'ajo' ],
    category: 'Especiales'
  },
  {
    id: 5,
    name: 'haburguesa doble mixta',
    description: '',
    price: 1300000,
    image: '/imagenes/burguerMix.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['carne 120g chuleta ahumada','Lechuga', 'Tomate', 'Cebolla', 'Doble queso', 'jamon','panceta','huevo', 'papas pay', 'salsas ketchup mayo mostaza ajo'],
    category: 'Vegetarianas'
  },
  {
    id: 6,
    name: 'haburguesa triple',
    description: '',
    price: 1450000,
    image: '/imagenes/burguerTriples.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['carne 120g chuleta ahumada medallon de pollo','Lechuga', 'Tomate', 'Cebolla', 'Doble queso', 'jamon','panceta','huevo', 'papas pay', 'salsas ketchup mayo mostaza ajo'],
    category: 'Especiales'
  },
  {
    id: 7,
    name: 'Reko malta',
    description: '475ml',
    price: 300000,
    image: '/imagenes/malta.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [],
    category: 'Premium'
  },
  {
     id: 8,
    name: 'Rekolita',
    description: '500ml',
    price: 250000,
    image: '/imagenes/rekolita.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [],
    category: 'Premium'
  }
];
