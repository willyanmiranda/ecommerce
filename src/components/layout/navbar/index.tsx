import Link from "next/link";
import Form from 'next/form';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Suspense } from "react";
import CartModal from "@/components/cart/modal";
import OpenWishlist from "@/components/wishlist/open-wishlist";
import UserModal from "@/components/user/modal";

export async function Navbar() {

    return (
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              prefetch={true}
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <div className="flex-none text-sm font-sans font-medium uppercase md:hidden lg:block">
                E-commerce
              </div>
            </Link>
             
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              <li key="all">
                <Link
                  href="/search"
                  prefetch={true}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  All
                </Link>
              </li>
              <li key="shirts">
                <Link
                  href="/search/shirts"
                  prefetch={true}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  Shirts
                </Link>
              </li>
              <li key="stickers">
                <Link
                  href="/search/stickers"
                  prefetch={true}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  Stickers
                </Link>
              </li>
            </ul>
            
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Suspense>
            <Form action="/search" className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
                <input
                    key="1"
                    type="text"
                    name="q"
                    placeholder="Search for products..."
                    autoComplete="off"
                    defaultValue=""
                    className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
                />
                <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                    <MagnifyingGlassIcon className="h-4" />
                </div>
            </Form>
            </Suspense>
          </div>
          <div className="flex justify-end md:w-1/3 gap-4">
            <UserModal/>
            <OpenWishlist/>
            <CartModal/>
          </div>
        </div>
      </nav>
    );
}