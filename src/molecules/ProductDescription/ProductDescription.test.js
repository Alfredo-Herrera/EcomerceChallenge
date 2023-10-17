/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import ProductDescription from './index';

test('El componente ProductDescription se renderiza correctamente', () => {
    const props = {
        description: 'Esta es la descripción del producto.',
    };

    render(<ProductDescription {...props} />);

    expect(screen.getByText('Descripción del Producto')).toBeTruthy();

    expect(
        screen.getByText('Esta es la descripción del producto.')
    ).toBeTruthy();
});
