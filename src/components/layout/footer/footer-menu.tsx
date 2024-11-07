import clsx from 'clsx';
import Link from 'next/link';

export default function FooterMenu() {

  return (
    <nav>
      <ul>
        <li>
            <Link
                href="/"
                className={clsx(
                'block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300'
                )}
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                href="/"
                className={clsx(
                'block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300'
                )}
            >
                About
            </Link>
        </li>
        <li>
            <Link
                href="/"
                className={clsx(
                'block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300'
                )}
            >
                Terms & Conditions
            </Link>
        </li>
        <li>
            <Link
                href="/"
                className={clsx(
                'block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300'
                )}
            >
                Shipping & Return Policy
            </Link>
        </li>
        <li>
            <Link
                href="/"
                className={clsx(
                'block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300'
                )}
            >
                Privacy Policy
            </Link>
        </li>
        <li>
            <Link
                href="/"
                className={clsx(
                'block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300'
                )}
            >
                FAQ
            </Link>
        </li>
      </ul>
    </nav>
  );
}