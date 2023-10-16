import { ProductCardType } from './product';

export interface CatoryType {
    total_products: number;
    items: ProductCardType[];
    pagination: Pagination;
    refinements: Refinement[];
    selected_store: string;
}

export interface Pagination {
    current: string;
    previous: string;
    next: Next;
    links: Link[];
}

export interface Next {
    href: string;
    title: string;
}

export interface Link {
    href: string;
    title: string;
}

export interface Refinement {
    price: Price;
    color: Color;
    base: Base;
}

export interface Color {
    title: string;
    filters: Filter[];
}

export interface Price {
    title: string;
    filters: Filter[];
}

export interface Filter {
    checked: boolean;
    value: string;
    param_value: string;
}

export interface Base {
    title: string;
    filters: Filter2[];
}

export interface Filter2 {
    checked: boolean;
    value: string;
    param_value: string;
}
