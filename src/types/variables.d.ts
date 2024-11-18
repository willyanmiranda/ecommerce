export interface Color {
    colorName: string;
}

export interface Size {
    sizeName: string;
}

export interface ProductVariation {
    id: string;
    productId: string;
    price: number;
    stock: number;
    Color: Color;
    Size: Size;
}

export interface ProductVariationsResponse {
    productVariations: ProductVariation[];
}