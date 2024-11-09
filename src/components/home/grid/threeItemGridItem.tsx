import { GridTileImage } from "./gridTileImage";
import IphoneImage from "../../../../public/iphone.webp"
import Link from "next/link";
import { Product } from "@/types";

export function ThreeItemGridItem({
    product,
    size,
    priority
  }: {
    product: Product;
    size: 'full' | 'half';
    priority?: boolean;
  }) {
    return (
      <div
        className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
      >
        <Link
          className="relative block aspect-square h-full w-full"
          href={`/product/${product.slug}`}
          prefetch={true}
        >
          <GridTileImage
            src={product.mainImage}
            fill
            sizes={
              size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
            }
            priority={priority}
            alt="teste"
            label={{
              position: size === 'full' ? 'center' : 'bottom',
              title: product.title as string,
              amount: product.price.toString(),
              currencyCode: "USD"
            }}
          />
        </Link>
      </div>
    );
}