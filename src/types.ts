export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
}
