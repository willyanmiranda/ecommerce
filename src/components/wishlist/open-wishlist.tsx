import { HeartIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import clsx from 'clsx';

export default function OpenWishlist() {
  return (
    <Link
        href="/wishlist"
        prefetch={true}
        className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
    >
        <HeartIcon
            className={clsx('h-4 transition-all ease-in-out hover:scale-110')}
        />
    </Link>
  );
}