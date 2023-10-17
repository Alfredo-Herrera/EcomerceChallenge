import { AlertColor } from '@mui/material';
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

export const setError = (data: {
    title: string;
    severityError: AlertColor | undefined;
}) => ({
    type: t.SET_ALERT,
    payload: data,
});
