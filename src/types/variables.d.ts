export interface Color {
    colorName: string;
}

export interface Size {
    sizeName: string;
}

export interface ProductVariation {
    id: string;
    productId: string;
    color: Color;
    size: Size;
    price: number;
    stock: number;
}

export interface ProductVariationsResponse {
    productVariations: ProductVariation[];
}