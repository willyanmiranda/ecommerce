import { Suspense } from "react";
import { RelatedProducts } from "@/components/product/relatedProducts";
import { Gallery } from "@/components/product/gallery";
import { ProductDescription } from "@/components/product/product-description";
import { Product } from "@/types";
import { getProductImages } from '@/lib/products';

interface ProductTemplateProps {
    product: Product;
}

export async function ProductTemplate({ product }: ProductTemplateProps) {
    const images = await getProductImages(product.id)
    
    return (
     <>
       <div className="mx-auto max-w-screen-2xl px-4">
            <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
                <div className="h-full w-full basis-full lg:basis-4/6">
                <Suspense
                    fallback={
                    <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
                    }
                >
                    <Gallery images={images}/>
                </Suspense>
                </div>

                <div className="basis-full lg:basis-2/6">
                <Suspense fallback={null}>
                    <ProductDescription product={product}  />
                </Suspense>
                </div>
            </div>
            <RelatedProducts category={product.Category.name} />
        </div>
     </>
    );
}