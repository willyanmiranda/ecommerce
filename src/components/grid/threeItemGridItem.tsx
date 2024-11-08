import { GridTileImage } from "./gridTileImage";
import IphoneImage from "../../../public/iphone.webp"
import Link from "next/link";

export function ThreeItemGridItem({
    size,
    priority
  }: {
    size: 'full' | 'half';
    priority?: boolean;
  }) {
    return (
      <div
        className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
      >
        <Link
          className="relative block aspect-square h-full w-full"
          href={`/product`}
          prefetch={true}
        >
          <GridTileImage
            src={IphoneImage}
            fill
            sizes={
              size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
            }
            priority={priority}
            alt="tetse"
            label={{
              position: size === 'full' ? 'center' : 'bottom',
              title: "Iphone 16",
              amount: "100",
              currencyCode: "USD"
            }}
          />
        </Link>
      </div>
    );
}