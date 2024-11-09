import Link from 'next/link';
import PcImage from "../../../../public/macbook.jpg"
import { GridTileImage } from '../grid/gridTileImage';
import { Product } from "@/types";

interface Props {
  products: Product[];
}

export async function Carousel({ products }: Props) {

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1 carousel-scrollbar">
      <ul className="flex animate-carousel gap-4">
      {products.map(product => (
        <li
          key={product.id}
          className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
              <Link href={`/product${product.slug}`} className="relative h-full w-full">
                  <GridTileImage
                  alt={product.title}
                  label={{
                      title: product.title,
                      amount: product.price.toString(),
                      currencyCode: "USD"
                  }}
                  src={product.mainImage}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  />
              </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}