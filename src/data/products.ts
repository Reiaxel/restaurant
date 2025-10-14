import { Product } from '../types';




export const products: Product[] = [
  {
    id: 1,
    name: ' clasica',
  description:'',
    price: 1000000,
    image: '/imagenes/burguerclasica.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['carne 120g','Pan', 'Carne 120g', 'Lechuga', 'Tomate', 'Cebolla', 'Queso ,panceta , cheddar', 'Salsa ketchu mayonesa mostaza ajo'],
    category: 'Clásicas'
  },
  {
    id: 2,
    name: 'Doble Carne',
    description: '',
    price: 1300000,
    image: '/imagenes/burguerDoble.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Doble carne 120g', 'Lechuga', 'Tomate', 'Cebolla', 'Doble queso', 'jamon','panceta','huevo', 'papas pay', 'salsas ketchu mayo moztaza ajo'],
    category: 'Especiales'
  },
  {
    id: 3,
    name: 'hamburguesa de pollo',
    description: '',
    price: 1000000,
    image: '/imagenes/burguerPollo.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['medallon de pollo','lechuga', 'tomate', 'cebolla', 'papas pay', 'huevo', 'queso','jamon', 'ketchu', 'mayo', 'mostaza',
      'ajo' ],
    category: 'Especiales'
  },
  {
    id: 4,
    name: 'haburguesa doble mixta',
    description: '',
    price: 1300000,
    image: '/imagenes/burguerMix.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['carne 120g chuleta ahumada','Lechuga', 'Tomate', 'Cebolla', 'Doble queso', 'jamon','panceta','huevo', 'papas pay', 'salsas ketchu mayo moztaza ajo'],
    category: 'Vegetarianas'
  },
  {
    id: 5,
    name: 'haburguesa triple',
    description: '',
    price: 1450000,
    image: '/imagenes/burguerTriples.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['carne 120g chuleta ahumada medallon de pollo','Lechuga', 'Tomate', 'Cebolla', 'Doble queso', 'jamon','panceta','huevo', 'papas pay', 'salsas ketchu mayo moztaza ajo'],
    category: 'Especiales'
  },
  {
    id: 6,
    name: 'Reko malta',
    description: '475ml',
    price: 300000,
    image: 'public/imagenes/malta.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [],
    category: 'Premium'
  },
  {
     id: 7,
    name: 'Rekolita',
    description: '500ml',
    price: 300000,
    image: 'public/imagenes/rekolita.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [],
    category: 'Premium'
  }
];
