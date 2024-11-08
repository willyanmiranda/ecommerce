import React from "react";
import CategoryItem from "./categoryItem";
import clsx from 'clsx';
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline"
const CategoryMenu = () => {
  return (
    <div className="py-10">
      <div className="max-w-screen-2xl mx-auto py-10 gap-x-5 px-10 max-md:px-10 gap-y-5 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1">
        <CategoryItem title="Smartphones" key="1" href="/">
          <DevicePhoneMobileIcon className={clsx('h-10 transition-all ease-in-out hover:scale-110')}/>
        </CategoryItem>
        <CategoryItem title="Smartphones" key="2" href="/">
          <DevicePhoneMobileIcon className={clsx('h-10 transition-all ease-in-out hover:scale-110')}/>
        </CategoryItem>
        <CategoryItem title="Smartphones" key="3" href="/">
          <DevicePhoneMobileIcon className={clsx('h-10 transition-all ease-in-out hover:scale-110')}/>
        </CategoryItem>
        <CategoryItem title="Smartphones" key="4" href="/">
          <DevicePhoneMobileIcon className={clsx('h-10 transition-all ease-in-out hover:scale-110')}/>
        </CategoryItem>
        <CategoryItem title="Smartphones" key="5" href="/">
          <DevicePhoneMobileIcon className={clsx('h-10 transition-all ease-in-out hover:scale-110')}/>
        </CategoryItem>
        <CategoryItem title="Smartphones" key="6" href="/">
          <DevicePhoneMobileIcon className={clsx('h-10 transition-all ease-in-out hover:scale-110')}/>
        </CategoryItem>
        <CategoryItem title="Smartphones" key="7" href="/">
          <DevicePhoneMobileIcon className={clsx('h-10 transition-all ease-in-out hover:scale-110')}/>
        </CategoryItem>
        <CategoryItem title="Smartphones" key="8" href="/">
          <DevicePhoneMobileIcon className={clsx('h-10 transition-all ease-in-out hover:scale-110')}/>
        </CategoryItem>
        <CategoryItem title="Smartphones" key="9" href="/">
          <DevicePhoneMobileIcon className={clsx('h-10 transition-all ease-in-out hover:scale-110')}/>
        </CategoryItem>
        <CategoryItem title="Smartphones" key="10" href="/">
          <DevicePhoneMobileIcon className={clsx('h-10 transition-all ease-in-out hover:scale-110')}/>
        </CategoryItem>
      </div>
    </div>
  );
};

export default CategoryMenu;