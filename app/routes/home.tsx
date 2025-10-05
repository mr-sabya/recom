import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Banner from "~/components/home/Banner/Banners";
import TopCategories from "~/components/home/TopCategories/TopCategories";
import TopProducts from "~/components/home/TopProducts/TopProducts";
import BestDeals from "~/components/home/BestDeals/BestDeals";
import { MegaCollections } from "~/components/home/MegaCollections/MegaCollections";
import RecentlyViewed from "~/components/home/RecentlyViewed/RecentlyViewed";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <div>
            <Banner />
            <TopCategories />
            <TopProducts />
            <BestDeals />
            <MegaCollections />
            <RecentlyViewed />
        </div>

    );
}
