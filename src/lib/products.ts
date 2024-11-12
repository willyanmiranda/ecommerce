import { Product, ProductImage } from "@/types";

export async function getProducts(): Promise<Product[]> {
    const BASE_URL = process.env.BASE_URL;
    const response = await fetch(`${BASE_URL}/products`, {
        next: { revalidate: 60 },
    });
    return response.json();
}

export async function getProductBySlug(slug: string): Promise<Product> {
    const BASE_URL = process.env.BASE_URL;
    const response = await fetch(`${BASE_URL}/slugs/${slug}`, {
        next: { revalidate: 60 },
    });
    return response.json();
}

export async function getProductImages(id: string): Promise<ProductImage[]> {
    const BASE_URL = process.env.BASE_URL;
    const response = await fetch(`${BASE_URL}/images/${id}`);
    return response.json();
}

export async function getRelatedProducts(category: string): Promise<Product[]> {
    const BASE_URL = process.env.BASE_URL;
    const response = await fetch(`${BASE_URL}/products?filters[category][$equals]=${category}`);
    return response.json();
}