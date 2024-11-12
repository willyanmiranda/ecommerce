import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer/footer";
import { ProductTemplate } from "@/components/templates/product/product";
import { getProductBySlug } from "@/lib/products";

export default async function ProductPage(props: { params: Promise<{ handle: string }> }) {
    const params = await props.params;
    const product = await getProductBySlug(params.handle);

    return (
        <>
            <Navbar/>
            <ProductTemplate product={product}/>
            <Footer/>
        </>
    );
}