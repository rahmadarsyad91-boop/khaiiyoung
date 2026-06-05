export interface ProductVariant {
  name: string;
  colorHex: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  price: number;
  category: string;
  description: string;
  image: string;
  gallery: string[];
  variants?: ProductVariant[];
  sizes?: string[];
  materialsAndCare: string;
  dimensions: string;
  shippingAndReturns: string;
  relatedIds: string[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedVariant: ProductVariant;
  quantity: number;
}
