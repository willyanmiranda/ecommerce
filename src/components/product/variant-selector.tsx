import clsx from 'clsx';
import { getVariables } from '@/lib/variables';

interface VariantSelectorProps {
    productId: string;
}
  
export async function VariantSelector({ productId }: VariantSelectorProps) {
  const variables = await getVariables(productId);
  console.log(variables)

  return (
    <div>...</div>
  );
}
  