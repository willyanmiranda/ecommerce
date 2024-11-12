'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { GridTileImage } from '../home/grid/gridTileImage';
import Image from 'next/image';
import { ProductImage } from '@/types';
import { useState } from 'react';

interface ImagesProps {
  images: ProductImage[];
}

export function Gallery({ images }: ImagesProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const buttonClassName =
    'h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center';

  return (
    <div>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.image as string}
            src={images[imageIndex]?.image as string}
            priority={true}
          />
        )}

        <div className="absolute bottom-[15%] flex w-full justify-center">
          <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
            <button
              aria-label="Previous product image"
              className={buttonClassName}
              disabled={imageIndex === 0}
              onClick={() => setImageIndex((prev) => prev - 1)}
            >
              <ArrowLeftIcon className="h-5" />
            </button>
            <div className="mx-1 h-6 w-px bg-neutral-500"></div>
            <button
              aria-label="Next product image"
              disabled={images.length - 1 === imageIndex}
              className={buttonClassName}
              onClick={() => setImageIndex((prev) => prev + 1)}
            >
              <ArrowRightIcon className="h-5" />
            </button>
          </div>
        </div>
       
      </div>

      
      <ul className="my-12 flex items-center justify-center gap-2 py-1 lg:mb-0">
        {images.map((image, index) => {
          const isActive = index === imageIndex;
          return (
            <li key={image.imageID} className="h-20 w-20">
              <button
                aria-label="Select product image"
                className="h-full w-full"
                onClick={() => setImageIndex(index)}
              >
                <GridTileImage
                  alt={image.image}
                  src={image.image}
                  width={80}
                  height={80}
                  active={isActive}
                />
              </button>
            </li>
          );
        })}
      </ul>
      
    </div>
  );
}