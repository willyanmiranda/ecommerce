export function ProductDescription() {
    return (
      <>
        <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
          <h1 className="mb-2 text-5xl font-medium">Macbook pro</h1>
          <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
            <Price
              amount="100"
              currencyCode="USD"
            />
          </div>
        </div>
        <VariantSelector options={product.options} variants={product.variants} />
        {product.descriptionHtml ? (
          <Prose
            className="mb-6 text-sm leading-tight dark:text-white/[60%]"
            html={product.descriptionHtml}
          />
        ) : null}
        <AddToCart product={product} />
      </>
    );
}
  