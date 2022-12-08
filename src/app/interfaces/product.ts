export interface Product {
    image: string;
    isNew: boolean;
    isOnSale: boolean;
    name: string;
    currentPrice: number;
    previousPrice?: number;
    rate?: number;
}
