import * as t from '../typesShoppingCar';

export const setDataShoppingCar = (data: []) => ({
    type: t.SET_DATA_SHOPPING_CAR,
    payload: data,
});
