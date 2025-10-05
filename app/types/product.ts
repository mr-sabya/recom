// app/types/product.ts
// Re-using the structure implicitly from your `products` array
export interface Product {
    name: string;
    image: string;
    price: number;
    oldPrice?: number; // Optional
    label?: string; // Optional
    rating: number; // Assuming 0-5 scale
    reviews: number;
    colors: string[];
    link: string;
}