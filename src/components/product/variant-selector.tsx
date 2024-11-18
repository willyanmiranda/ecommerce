'use client'

import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { ProductVariation } from '@/types/variables';

interface VariantSelectorProps {
  variations: ProductVariation[];
}

interface VariantSelectorProps {
  variations: ProductVariation[];
  onVariationSelect: (variation: ProductVariation | null) => void;
}

export function VariantSelector({ variations, onVariationSelect }: VariantSelectorProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const colors = Array.from(new Set(variations.map((v) => v.Color.colorName)));
  const sizes = Array.from(new Set(variations.map((v) => v.Size.sizeName)));

  const selectedVariation = variations.find(
    (v) => v.Color.colorName === selectedColor && v.Size.sizeName === selectedSize
  );

  useEffect(() => {
    onVariationSelect(selectedVariation || null);
  }, [selectedVariation, onVariationSelect, selectedColor, selectedSize]);

  return (
    <>
      <div>
        <dl className="mb-8">
          <dt className="mb-4 text-sm uppercase tracking-wide">Color</dt>
          <dd className="flex flex-wrap gap-3">
            {colors.map((value) => {
              const isActive = value === selectedColor;
              const isAvailableForSale = variations.some(
                (v) => v.Color.colorName === value && v.stock > 0
              );

              return (
                <button
                  key={value}
                  onClick={() => setSelectedColor(value)}
                  className={clsx(
                    'flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900',
                    {
                      'cursor-default ring-2 ring-blue-600': isActive,
                      'ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-blue-600':
                        !isActive && isAvailableForSale,
                      'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700':
                        !isAvailableForSale,
                    }
                  )}
                >
                  {value}
                </button>
              );
            })}
          </dd>
        </dl>
      </div>
      <div>
        <dl className="mb-8">
          <dt className="mb-4 text-sm uppercase tracking-wide">Sizes</dt>
          <dd className="flex flex-wrap gap-3">
            {sizes.map((value) => {
              const isActive = value === selectedSize;
              const isAvailableForSale = variations.some(
                (v) => v.Size.sizeName === value && v.stock > 0
              );

              return (
                <button
                  key={value}
                  onClick={() => setSelectedSize(value)}
                  className={clsx(
                    'flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900',
                    {
                      'cursor-default ring-2 ring-blue-600': isActive,
                      'ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-blue-600':
                        !isActive && isAvailableForSale,
                      'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700':
                        !isAvailableForSale,
                    }
                  )}
                >
                  {value}
                </button>
              );
            })}
          </dd>
        </dl>
      </div>
    </>
  );
}