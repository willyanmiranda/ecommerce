import { GridTileImage } from "../grid/gridTileImage";
import Link from "next/link";
import CanonImage from "../../../../public/canon.jpg"
import { Product } from "@/types";

interface ProductItemProps {
    product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
    return (
        <>
            <div
                key={product.id}
                className="aspect-square w-full flex-none "
            >
                <Link
                className="relative h-full w-full"
                href={`/product/${product.slug}`}
                prefetch={true}
                >
                <GridTileImage
                    alt={product.title}
                    label={{
                    title: product.title,
                    amount: product.price.toString(),
                    currencyCode: "USD"
                    }}
                    src={product.mainImage}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
                </Link>
            </div>
        </>
    );
}