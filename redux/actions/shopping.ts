import { carShopping } from '../reducers/shopping';
import * as t from '../typesShoppingCar';

// funcion para modificar el estado de redux
export const setDataShoppingCar = (data: carShopping[]) => ({
    type: t.SET_DATA_SHOPPING_CAR,
    payload: data,
});

// funcion para modificar el estado de redux
export const setDataPaginationFilter = (data: number) => ({
    type: t.SET_DATA_FILTER_PAGINATION,
    payload: data,
});
// funcion para modificar el estado de redux

export const setError = (error: { title: string; severityError: string }) => ({
    type: t.SET_ALERT,
    payload: {
        ...error,
    },
});

// funcion para modificar el estado de redux

export const setLoading = (data: boolean) => ({
    type: t.LOADING,
    payload: data,
});
