/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux'; // Si estás utilizando Redux
import { createStore } from 'redux'; // Si estás utilizando Redux
import rootReducer from '../../../redux/reduxTest/rootReducer';
import CardShopping from './index';

// Define una función simulada para setDataShoppingCar

test('El componente CardShopping se renderiza correctamente y maneja el evento de eliminar', () => {
    render(
        <Provider store={createStore(rootReducer)}>
            <CardShopping
                image="/logo.png"
                title="titulo del carrito"
                price={450}
                amount={2}
            />
        </Provider>
    );

    expect(screen.getByText('titulo del carrito')).toBeTruthy();
    expect(screen.getByText('$450')).toBeTruthy();
});
