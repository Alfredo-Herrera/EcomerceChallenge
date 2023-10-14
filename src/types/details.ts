export interface ProductDetailType {
    title: string;
    description: string;
    variants: Variant[];
    categories: any[];
    asin: string;
    url: string;
    reviews: Reviews;
    item_available: boolean;
    price: number;
    bestsellers_rank: any[];
    main_image: MainImage;
    total_images: number;
    images: string;
    total_videos: number;
    videos: any[];
    delivery_message: string;
    product_information: ProductInformation;
    badges: Badges;
    sponsored_products: any[];
    also_bought: any[];
    other_sellers: any[];
    priceDetails: PriceDetails;
}

export interface Variant {
    selected_variations: SelectedVariations;
    dimensionValuesDisplayData: DimensionValuesDisplayData;
    variationDisplayLabels: VariationDisplayLabels;
    asinToDimensionIndexMap: AsinToDimensionIndexMap;
    selectedVariationValues: SelectedVariationValues;
    dimensionValuesData: string[][];
    asinVariationValues: AsinVariationValues;
    variationValues: VariationValues;
    dimensionToAsinMap: DimensionToAsinMap;
    currentAsin: string;
    parentAsin: string;
    variant_thumbs: string[];
}

export interface SelectedVariations {
    color_name: string;
}

export interface DimensionValuesDisplayData {
    B0CKM8FQJY: string[];
    B0BWSJ2BBG: string[];
    B09TMT9CNS: string[];
}

export interface VariationDisplayLabels {}

export interface AsinToDimensionIndexMap {
    B083JR4BRZ: number[];
    B08R6ND2QV: number[];
    B08R6XHD52: number[];
    B08R6WX5LJ: number[];
    B08R6VTVJG: number[];
    B08R6XZBLQ: number[];
    B08MTRVJ4B: number[];
    B08R6XGCVM: number[];
    B08N4G92D9: number[];
}

export interface SelectedVariationValues {
    color_name: number;
}

export interface AsinVariationValues {
    B0CKM8FQJY: B0Ckm8Fqjy;
    B0BWSJ2BBG: B0Bwsj2Bbg;
    B09TMT9CNS: B09Tmt9Cns;
}

export interface B0Ckm8Fqjy {
    ASIN: string;
}

export interface B0Bwsj2Bbg {
    ASIN: string;
}

export interface B09Tmt9Cns {
    ASIN: string;
}

export interface VariationValues {}

export interface DimensionToAsinMap {
    '0': string;
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '7': string;
    '8': string;
}

export interface Reviews {
    total_reviews: number;
    rating: number;
}

export interface MainImage {
    link: string;
}

export interface ProductInformation {
    dimensions: string;
    weight: string;
    available_from: string;
    available_from_utc: string;
    available_for_months: number;
    available_for_days: number;
    manufacturer: string;
    model_number: string;
    department: string;
    qty_per_order: number;
}

export interface Badges {
    amazon_prime: boolean;
}

export interface PriceDetails {
    amazon_price: string;
    price: number;
    total_cost: string;
    suministros: string;
    comision: string;
    utility: string;
    total: string;
}
