export interface ProductCardType {
    asin: string;
    price: number;
    reviews: Reviews;
    url: string;
    score: number;
    sponsored: boolean;
    amazonChoice: boolean;
    bestSeller: boolean;
    amazonPrime: boolean;
    title: string;
    thumbnail: string;
    position: Position;
    details: Details;
}

export interface Reviews {
    total_reviews: number;
    rating: number;
}

export interface Position {
    page: number;
    position: number;
    global_position: number;
}

export interface Details {
    amazon_price: number;
    price: number;
    total_cost: number;
    suministros: number;
    comision: number;
    utility: number;
    total: number;
}
