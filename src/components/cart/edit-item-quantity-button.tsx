'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useCart } from "./cart-context";
import clsx from 'clsx';

export function EditItemQuantityButton({ productId, type }: { productId: string; type: 'plus' | 'minus'; }) {

  const { dispatch, state } = useCart();
  const currentQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0)

  const updateQuantity = (quantity: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        productId: productId,
        quantity: quantity,
      },
    });
  }
  
  return (
    <div>
      <button
        type="submit"
        aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
        className={clsx(
          'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
          {
            'ml-auto': type === 'minus'
          }
        )}
        onClick={type === 'minus' ? () => updateQuantity(currentQuantity - 1) : () => updateQuantity(currentQuantity + 1)}
      >
        {type === 'plus' ? (
          <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
        ) : (
          <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
        )}
      </button>
      <p aria-live="polite" className="sr-only" role="status"></p>
    </div>
  );
}