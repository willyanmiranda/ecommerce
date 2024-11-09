import { Product } from "@/types";

export async function getProducts(): Promise<Product[]> {
    const BASE_URL = process.env.BASE_URL;
    const response = await fetch(`${BASE_URL}/products`, {
        next: { revalidate: 60 },
    });
    return response.json();
}
