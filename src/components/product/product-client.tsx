'use client';

import { useState } from "react";
import { VariantSelector } from "./variant-selector";
import { AddToCart } from "../cart/add-to-cart";
import Prose from "../common/prose"
import { Product } from "@/types";
import { ProductVariation } from "@/types/variables";

interface ProductClientProps {
  product: Product;
  variations: ProductVariation[];
}

export function ProductClient({ product, variations }: ProductClientProps) {
  const [selectedVariation, setSelectedVariation] = useState<ProductVariation | null>(null);

  return (
    <>
      <VariantSelector
        variations={variations}
        onVariationSelect={setSelectedVariation}
      />
      {product.description ? (
        <Prose
            className="mb-6 text-sm leading-tight dark:text-white/[60%]"
            text={product.description}
        />
        ) : null}
      <AddToCart product={product} selectedVariation={selectedVariation} />
    </>
  );
}