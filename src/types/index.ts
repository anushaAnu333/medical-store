export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  tag?: string;
  description?: string;
  inStock?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface WishlistItem extends Product {}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}
