import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./banner.css";

import { Link } from "react-router";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const slides = [
    {
        image: "/assets/images/banner-bg-3.png",
        title: "Summer Sale Up to 50% Off",
        subtitle: "Grab your favorite products now!",
        link: "/shop",
        button: "Shop Now",
    },
    {
        image: "/assets/images/banner-bg-3.png",
        title: "New Arrivals are Here",
        subtitle: "Check out the latest trends",
        link: "/shop",
        button: "Explore",
    },
    {
        image: "/assets/images/banner-bg-3.png",
        title: "Free Shipping on Orders $50+",
        subtitle: "Hurry! Limited time offer",
        link: "/shop",
        button: "Shop Now",
    },
];

export default function Banner() {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-80 md:h-[400px] lg:h-[550px]" // taller overall
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-80 md:h-[400px] lg:h-[550px] bg-cover bg-center relative"
                            style={{ backgroundImage: `url('${slide.image}')` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="text-center text-white px-4 md:px-8">
                                    <h2 className="text-xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                                    <p className="mb-4 text-sm md:text-lg">{slide.subtitle}</p>
                                    <Link
                                        to={slide.link}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm md:text-base font-medium transition"
                                    >
                                        {slide.button}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
}
