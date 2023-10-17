/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import ReturnProductDetailContainer from './index';
test('El componente ReturnProductDetailContainer se renderiza correctamente', () => {
    render(<ReturnProductDetailContainer />);

    expect(screen.getByText('Devolución Gratis')).toBeTruthy();

    expect(screen.getByText('Compra Protegida')).toBeTruthy();
});
