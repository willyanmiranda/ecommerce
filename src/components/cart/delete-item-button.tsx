'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from './cart-context';

export function DeleteItemButton({ productId }: { productId: string }) {
  const { dispatch } = useCart()
  
  const deleteproduct = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: productId
    })
  }

  return (
    <div>
      <button
        aria-label="Remove cart item"
        className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500"
        onClick={() => deleteproduct()}
      >
        <XMarkIcon className="mx-[1px] h-4 w-4 text-white dark:text-black" />
      </button>
      <p aria-live="polite" className="sr-only" role="status">
      </p>
    </div>
  );
}
