import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    // "/about" path → renders about.tsx
    route("about", "routes/about.tsx"),

    // shop page
    route("shop", "routes/shop.tsx"),
] satisfies RouteConfig;
