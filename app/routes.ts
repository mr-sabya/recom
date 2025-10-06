import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    // "/about" path → renders about.tsx
    route("about", "routes/about/index.tsx"),

    // shop page
    route("shop", "routes/shop/index.tsx"),

    // categories page
    route("categories", "routes/categories/index.tsx"),

    // blog
    route("blog", "routes/blog/index.tsx"),
    
    //sign-in
    route("signin", "routes/signin/index.tsx"),

    
] satisfies RouteConfig;
