import { AlertColor } from '@mui/material';
import * as t from '../typesShoppingCar';

export interface MyStateProps {
    data: carShopping[];
    filterPagination: number;
    error: {
        title: string;
        severityError: AlertColor | undefined;
    };
    loading: boolean;
}

export interface main {
    main: MyStateProps;
}

export interface carShopping {
    image: string;
    title: string;
    price: string;
    amount: number;
}

// estado inicial
const MyState: MyStateProps = {
    data: [
        {
            image: '/logo.png',
            title: 'titulo del carrito',
            price: '450',
            amount: 2,
        },
    ],
    filterPagination: 1,
    error: {
        title: 'Esto es un error',
        severityError: 'success',
    },
    loading: false,
};

const Shopping = (state = MyState, action: { type: any; payload: any }) => {
    switch (action.type) {
        case t.RESET_STATE:
            return {
                data: [],
                error: {
                    title: '',
                    severityError: 'success',
                },
            };
        case t.SET_DATA_SHOPPING_CAR:
            return {
                ...state,
                data: action.payload,
                error: '',
            };
        case t.SET_DATA_FILTER_PAGINATION:
            return {
                ...state,
                filterPagination: action.payload,
            };
        case t.LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return { ...state };
    }
};

export default Shopping;
