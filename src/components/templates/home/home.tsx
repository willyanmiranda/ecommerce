import { Carousel } from "@/components/home/carousel/carousel";
import { ThreeItemGrid } from "../../home/grid/threeItemGrid";
import Banner from "@/components/home/banner/banner";
import CategoryMenu from "@/components/home/categories/categoryMenu";
import Products from "@/components/home/products/products";

export function HomeTemplate() {
  
    return (
     <>
        <Banner/>
        <ThreeItemGrid/>
        <Products/>
        <CategoryMenu/>
        <Carousel/>
     </>
    );
}