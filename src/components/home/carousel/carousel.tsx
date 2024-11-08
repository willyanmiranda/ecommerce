import Link from 'next/link';
import PcImage from "../../../public/pczin.jpg"
import { GridTileImage } from '../grid/gridTileImage';

export async function Carousel() {

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1 carousel-scrollbar">
      <ul className="flex animate-carousel gap-4">
        <li
        key="1"
        className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
        >
        <Link href={`/product`} className="relative h-full w-full">
            <GridTileImage
            alt="teste"
            label={{
                title: "PC Gamer",
                amount: "500",
                currencyCode: "USD"
            }}
            src={PcImage}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
        </Link>
        </li>
        <li
        key="2"
        className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
        >
        <Link href={`/product`} className="relative h-full w-full">
            <GridTileImage
            alt="teste"
            label={{
                title: "PC Gamer",
                amount: "500",
                currencyCode: "USD"
            }}
            src={PcImage}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
        </Link>
        </li>
        <li
        key="3"
        className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
        >
        <Link href={`/product`} className="relative h-full w-full">
            <GridTileImage
            alt="teste"
            label={{
                title: "PC Gamer",
                amount: "500",
                currencyCode: "USD"
            }}
            src={PcImage}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
        </Link>
        </li>
        <li
        key="4"
        className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
        >
        <Link href={`/product`} className="relative h-full w-full">
            <GridTileImage
            alt="teste"
            label={{
                title: "PC Gamer",
                amount: "500",
                currencyCode: "USD"
            }}
            src={PcImage}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
        </Link>
        </li>
        <li
        key="5"
        className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
        >
        <Link href={`/product`} className="relative h-full w-full">
            <GridTileImage
            alt="teste"
            label={{
                title: "PC Gamer",
                amount: "500",
                currencyCode: "USD"
            }}
            src={PcImage}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
        </Link>
        </li>
        <li
        key="6"
        className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
        >
        <Link href={`/product`} className="relative h-full w-full">
            <GridTileImage
            alt="teste"
            label={{
                title: "PC Gamer",
                amount: "500",
                currencyCode: "USD"
            }}
            src={PcImage}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
        </Link>
        </li>
        <li
        key="7"
        className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
        >
        <Link href={`/product`} className="relative h-full w-full">
            <GridTileImage
            alt="teste"
            label={{
                title: "PC Gamer",
                amount: "500",
                currencyCode: "USD"
            }}
            src={PcImage}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
        </Link>
        </li>
        <li
        key="8"
        className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
        >
        <Link href={`/product`} className="relative h-full w-full">
            <GridTileImage
            alt="teste"
            label={{
                title: "PC Gamer",
                amount: "500",
                currencyCode: "USD"
            }}
            src={PcImage}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
        </Link>
        </li>
      </ul>
    </div>
  );
}