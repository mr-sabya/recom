// app/types/product.ts
// Re-using the structure implicitly from your `products` array
export interface Product {
    name: string;
    image: string;
    price: number;
    oldPrice?: number;
    label?: string;
    rating: number;
    reviews: number;
    colors?: string[]; // Example of a variation/attribute
    category: string; // Added for filtering
    material?: string; // Example of another attribute
    size?: string[]; // Example of a variation
    link: string;
}