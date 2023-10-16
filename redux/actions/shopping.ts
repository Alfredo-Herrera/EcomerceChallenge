import { carShopping } from '../reducers/shopping';
import * as t from '../typesShoppingCar';

export const setDataShoppingCar = (data: carShopping[]) => ({
    type: t.SET_DATA_SHOPPING_CAR,
    payload: data,
});

export const setDataPaginationFilter = (data: number) => ({
    type: t.SET_DATA_FILTER_PAGINATION,
    payload: data,
});
