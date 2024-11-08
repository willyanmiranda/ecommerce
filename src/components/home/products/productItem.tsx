import { GridTileImage } from "../grid/gridTileImage";
import Link from "next/link";
import CanonImage from "../../../../public/canon.jpg"

export function ProductItem() {
    return (
        <>
            <div
                key="1"
                className="aspect-square w-full flex-none "
            >
                <Link
                className="relative h-full w-full"
                href={`/product/`}
                prefetch={true}
                >
                <GridTileImage
                    alt="teste"
                    label={{
                    title: "camera",
                    amount: "350",
                    currencyCode: "USD"
                    }}
                    src={CanonImage}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
                </Link>
            </div>
            <div
                key="2"
                className="aspect-square w-full flex-none "
            >
                <Link
                className="relative h-full w-full"
                href={`/product/`}
                prefetch={true}
                >
                <GridTileImage
                    alt="teste"
                    label={{
                    title: "camera",
                    amount: "350",
                    currencyCode: "USD"
                    }}
                    src={CanonImage}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
                </Link>
            </div>
            <div
                key="3"
                className="aspect-square w-full flex-none "
            >
                <Link
                className="relative h-full w-full"
                href={`/product/`}
                prefetch={true}
                >
                <GridTileImage
                    alt="teste"
                    label={{
                    title: "camera",
                    amount: "350",
                    currencyCode: "USD"
                    }}
                    src={CanonImage}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
                </Link>
            </div>
            <div
                key="4"
                className="aspect-square w-full flex-none "
            >
                <Link
                className="relative h-full w-full"
                href={`/product/`}
                prefetch={true}
                >
                <GridTileImage
                    alt="teste"
                    label={{
                    title: "camera",
                    amount: "350",
                    currencyCode: "USD"
                    }}
                    src={CanonImage}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
                </Link>
            </div>
            <div
                key="5"
                className="aspect-square w-full flex-none "
            >
                <Link
                className="relative h-full w-full"
                href={`/product/`}
                prefetch={true}
                >
                <GridTileImage
                    alt="teste"
                    label={{
                    title: "camera",
                    amount: "350",
                    currencyCode: "USD"
                    }}
                    src={CanonImage}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
                </Link>
            </div>
            <div
                key="6"
                className="aspect-square w-full flex-none "
            >
                <Link
                className="relative h-full w-full"
                href={`/product/`}
                prefetch={true}
                >
                <GridTileImage
                    alt="teste"
                    label={{
                    title: "camera",
                    amount: "350",
                    currencyCode: "USD"
                    }}
                    src={CanonImage}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
                </Link>
            </div>
            <div
                key="7"
                className="aspect-square w-full flex-none "
            >
                <Link
                className="relative h-full w-full"
                href={`/product/`}
                prefetch={true}
                >
                <GridTileImage
                    alt="teste"
                    label={{
                    title: "camera",
                    amount: "350",
                    currencyCode: "USD"
                    }}
                    src={CanonImage}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
                </Link>
            </div>
            <div
                key="8"
                className="aspect-square w-full flex-none "
            >
                <Link
                className="relative h-full w-full"
                href={`/product/`}
                prefetch={true}
                >
                <GridTileImage
                    alt="teste"
                    label={{
                    title: "camera",
                    amount: "350",
                    currencyCode: "USD"
                    }}
                    src={CanonImage}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
                </Link>
            </div>
        </>
    );
}