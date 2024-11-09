import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer/footer";
import { ProductTemplate } from "@/components/templates/product/product";
export default function ProductPage() {
  
    return (
        <>
            <Navbar/>
            <ProductTemplate/>
            <Footer/>
        </>
    );
}