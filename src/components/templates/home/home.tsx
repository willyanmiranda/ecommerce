import { Carousel } from "@/components/home/carousel/carousel";
import { ThreeItemGrid } from "../../home/grid/threeItemGrid";
import Banner from "@/components/home/banner/banner";

export function HomeTemplate() {
  
    return (
     <>
        <Banner/>
        <ThreeItemGrid/>
        <Carousel/>
     </>
    );
}