export declare class Product{
    readonly id: string;
    readonly image: string;
    readonly images: string[];
    readonly brand: string;
    readonly price: number;
    readonly rating: number;
    readonly numReviews?: number;
    readonly isFeatured: boolean;
    readonly name: string;
    readonly description: string;
    readonly category: number;
    readonly countInStock: number;
    readonly city: string;
    readonly date: string;
    readonly isPaid: boolean;

}
export declare class Category{
    readonly id: string;
    readonly name: string;
    readonly src: any;
}

export declare class Filtering{
    readonly id: string;
    readonly name: string;
}