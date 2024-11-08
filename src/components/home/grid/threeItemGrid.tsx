import { ThreeItemGridItem } from "./threeItemGridItem";

export async function ThreeItemGrid() {
  
    return (
      <section className="mx-auto grid max-w-screen-2xl gap-4 px-10 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
        <ThreeItemGridItem size="full" priority={true} />
        <ThreeItemGridItem size="half" priority={true} />
        <ThreeItemGridItem size="half" />
      </section>
    );
}