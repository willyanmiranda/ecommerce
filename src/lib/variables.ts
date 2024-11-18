import { ProductVariationsResponse } from "@/types/variables";

export async function getVariables(id: string): Promise<ProductVariationsResponse> {
    const BASE_URL = process.env.BASE_URL;
    const response = await fetch(`${BASE_URL}/variables/${id}`);
    return response.json();
}