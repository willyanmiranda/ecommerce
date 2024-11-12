import Price from "../common/price";
import Prose from "../common/prose";
import { VariantSelector } from "./variant-selector";
import { Product } from "@/types";

interface ProductTemplateProps {
  product: Product;
}

export function ProductDescription({ product }: ProductTemplateProps) {
    return (
      <>
        <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
          <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
          <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
            <Price
              amount={product.price.toString()}
              currencyCode="USD"
            />
          </div>
        </div>
        {/* <VariantSelector productId={product.id} /> */}
        {product.description ? (
          <Prose
            className="mb-6 text-sm leading-tight dark:text-white/[60%]"
            text={product.description}
          />
        ) : null}
        
      </>
    );
}
  