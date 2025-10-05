import { Link } from "react-router";
import { ShoppingCart } from "lucide-react"; // icon

const products = [
    {
        name: "Kalrez® Spectrum™ 6375",
        image: "/assets/images/products/product-1.png",
        price: 17.84,
        oldPrice: 30.0,
        label: "Sale",
        rating: 5,
        reviews: 6400,
        colors: ["#3B82F6", "#10B981", "#F59E0B", "#EC4899", "#A78BFA"],
        link: "/product/kalrez-spectrum",
    },
    {
        name: "Chiffon Bell Sleeves Dress",
        image: "/assets/images/products/product-2.png",
        price: 78,
        oldPrice: 100,
        label: "20% OFF",
        rating: 5,
        reviews: 6400,
        colors: ["#3B82F6", "#10B981", "#F59E0B", "#EC4899", "#A78BFA"],
        link: "/product/calvin-dress",
    },
    {
        name: "Wireless Headphones",
        image: "/assets/images/products/product-3.png",
        price: 99,
        oldPrice: 129,
        label: "New",
        rating: 4.5,
        reviews: 1200,
        colors: ["#000000", "#FFFFFF"],
        link: "/product/wireless-headphones",
    },
    {
        name: "Smart Watch",
        image: "/assets/images/products/product-4.png",
        price: 199,
        oldPrice: 249,
        label: "Trending",
        rating: 4.7,
        reviews: 800,
        colors: ["#3B82F6", "#10B981"],
        link: "/product/smart-watch",
    },
    {
        name: "Sneakers",
        image: "/assets/images/products/product-5.png",
        price: 79,
        oldPrice: 99,
        label: "Sale",
        rating: 4.3,
        reviews: 950,
        colors: ["#F59E0B", "#EC4899", "#A78BFA"],
        link: "/product/sneakers",
    },
    {
        name: "Backpack",
        image: "/assets/images/products/product-6.png",
        price: 49,
        oldPrice: 69,
        label: "Limited",
        rating: 4.0,
        reviews: 600,
        colors: ["#3B82F6", "#A78BFA"],
        link: "/product/backpack",
    },
    {
        name: "Sunglasses",
        image: "/assets/images/products/product-7.png",
        price: 29,
        oldPrice: 49,
        label: "Hot",
        rating: 4.5,
        reviews: 300,
        colors: ["#000000", "#F59E0B"],
        link: "/product/sunglasses",
    },
    {
        name: "Coffee Maker",
        image: "/assets/images/products/product-8.png",
        price: 129,
        oldPrice: 179,
        label: "Best Seller",
        rating: 4.8,
        reviews: 1100,
        colors: ["#10B981", "#EC4899"],
        link: "/product/coffee-maker",
    },
];


export default function TopProducts() {
    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Products</h2>


                <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4">
                    {products.map((product) => (
                        <div key={product.name} className="relative flex flex-col bg-white rounded-lg shadow hover:shadow-lg transition">

                            <div className="relative">

                                {/* Add to Cart Icon (Top Right) */}
                                <button className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition cursor-pointer" onClick={() => console.log(`Add ${product.name} to cart`)}> <ShoppingCart className="w-4 h-4" /> </button>

                                {/* Label */}
                                {product.label && (
                                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1">
                                        {product.label}
                                    </span>
                                )}

                                {/* Product Image */}
                                <Link to={product.link} className="flex justify-center items-center mb-2">
                                    <img src={product.image} alt={product.name} className="object-contain" />
                                </Link>
                            </div>

                            <div className="p-4 text-center">


                                {/* Product Name */}
                                <Link to={product.link} className="text-gray-700 text-sm text-center font-medium mb-1">
                                    {product.name}
                                </Link>

                                {/* Rating */}
                                <div className="flex items-center justify-center mb-1 space-x-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i} className="text-yellow-400">★</span>
                                    ))}
                                    <span className="text-gray-500 text-xs ml-1">{product.reviews.toLocaleString()}</span>
                                </div>

                                {/* Price */}
                                <div className="flex justify-center items-baseline space-x-2 mb-2">
                                    {product.oldPrice && <span className="line-through text-gray-400 text-sm">${product.oldPrice.toFixed(2)}</span>}
                                    <span className="text-blue-600 font-semibold">${product.price.toFixed(2)}</span>
                                </div>

                                {/* Buy Now Button */}
                                <button className="mt-auto bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-full text-sm font-medium transition cursor-pointer flex justify-center items-center space-x-2">
                                    <ShoppingCart className="w-4 h-4" />
                                    <span>Buy Now</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
