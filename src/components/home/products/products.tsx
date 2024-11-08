import { ProductItem } from "./productItem";

const Products = () => {
    return (
      <div className="border-t-1">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto py-4 gap-x-2 px-10 gap-y-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
           
            <ProductItem />
        
          </div>
          <div className="flex justify-center items-center mt-3 gap-x-1 max-lg:flex-col max-lg:gap-y-1">
            <button className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg rounded-lg">
              SEE ALL
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Products;