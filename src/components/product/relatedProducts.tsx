import { GridTileImage } from "../home/grid/gridTileImage";
import { getRelatedProducts } from "@/lib/products";
import Link from "next/link";

interface RelatedProductsProps {
  category: string;
}

export async function RelatedProducts({ category }: RelatedProductsProps) {
    const relatedProducts = await getRelatedProducts(category)

    return (
      <div className="py-8">
        <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
        <ul className="flex w-full gap-4 overflow-x-auto carousel-scrollbar pb-2 pt-1">
          {relatedProducts.map((product) => (
            <li
              key={product.id}
              className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
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
            </li>
          ))}
        </ul>
      </div>
    );
}