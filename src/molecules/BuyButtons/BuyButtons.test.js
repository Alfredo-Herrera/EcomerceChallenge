/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import BuyButtons from './index';

test('El componente BuyButtons renderiza correctamente y maneja el evento de agregar al carrito', () => {
    const mockAddProductCar = jest.fn();
    render(<BuyButtons addProductCar={mockAddProductCar} />);

    expect(screen.getByText('Comprar ahora')).toBeTruthy();
    expect(screen.getByText('Agregar al Carrito')).toBeTruthy();

    fireEvent.click(screen.getByText('Agregar al Carrito'));
    expect(mockAddProductCar).toHaveBeenCalledTimes(1);
});
