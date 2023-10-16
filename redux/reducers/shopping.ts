import * as t from '../typesShoppingCar';

export interface MyStateProps {
    data: carShopping[];
    filterPagination: number;
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

const MyState: MyStateProps = {
    data: [],
    filterPagination: 1,
};

// eslint-disable-next-line default-param-last
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
        default:
            return { ...state };
    }
};

export default Shopping;
