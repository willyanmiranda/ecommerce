'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useCart } from "./cart-context";
import { Product } from '@/types';
import { ProductVariation } from '@/types/variables';

interface AddToCartProps {
  product: Product;
  selectedVariation: ProductVariation | null;
}

type handleAddToCartProps = (event: React.MouseEvent<HTMLButtonElement>) => void;

function SubmitButton({
  availableForSale,
  selectedVariantId,
  handleAddToCart
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  handleAddToCart: handleAddToCartProps
}) {
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button onClick={handleAddToCart} className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        onClick={handleAddToCart}
        className={clsx(buttonClasses)}
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
        Add To Cart
      </button>
    );
  }

  return (
    <button
      aria-label="Add to cart"
      className={clsx(buttonClasses, {
        'hover:opacity-90': true
      })}
      onClick={handleAddToCart}
    >
      <div className="absolute left-0 ml-4">
        <PlusIcon className="h-5" />
      </div>
      Add To Cart
    </button>
  );
}

export function AddToCart({ product, selectedVariation }: AddToCartProps) {

  const { dispatch } = useCart();

  const handleAddToCart = () => {
    if (!selectedVariation) {
      alert("Por favor, selecione uma variação antes de adicionar ao carrinho.");
      return;
    }

    dispatch({
      type: "ADD_ITEM",
      payload: {
        product: product,
        variationId: selectedVariation.id,
        quantity: 1,
      },
    });
  };

  return (
    <div>
      <SubmitButton availableForSale={true} handleAddToCart={handleAddToCart} selectedVariantId={selectedVariation?.id} />
      <p aria-live="polite" className="sr-only" role="status"></p>
    </div>
  );
}
