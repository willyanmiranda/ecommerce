import Link from "next/link";
import React, { type ReactNode } from "react";

interface CategoryItemProps {
  children: ReactNode;
  title: string;
  href: string;
}

const CategoryItem = ({ title, children, href }: CategoryItemProps) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center justify-center h-36 rounded-lg gap-y-2 cursor-pointer border border-neutral-200 dark:border-neutral-800 py-5 text-white hover:bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
        {children}

        <h3 className="font-semibold text-xl">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryItem;