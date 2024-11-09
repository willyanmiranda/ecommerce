import { ThreeItemGridItem } from "./threeItemGridItem";
import { Product } from "@/types";

interface Props {
  products: Product[];
}

export function ThreeItemGrid({ products }: Props) {
  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-10 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      <ThreeItemGridItem size="full" product={products[0]} priority={true} />
      <ThreeItemGridItem size="half" product={products[1]} priority={true} />
      <ThreeItemGridItem size="half" product={products[2]} />
    </section>
  );
}
