import { Carousel } from "@/components/home/carousel/carousel";
import { ThreeItemGrid } from "../../home/grid/threeItemGrid";
import Banner from "@/components/home/banner/banner";
import CategoryMenu from "@/components/home/categories/categoryMenu";
import Products from "@/components/home/products/products";
import { getProducts } from "@/lib/products";

export async function HomeTemplate() {
    const products = await getProducts();
  
    return (
     <>
        <Banner/>
        <ThreeItemGrid products={products}/>
        <Products products={products}/>
        <CategoryMenu/>
        <Carousel products={products}/>
     </>
    );
}