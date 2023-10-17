/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import InfoProductDetail from './index';

test('El componente InfoProductDetail se renderiza correctamente', () => {
    const props = {
        title: 'Ejemplo de Título',
        reviews: {
            rating: 4.5,
            numReviews: 100,
        },
        asin: 'ASIN123',
        price: 99.99,
    };

    render(<InfoProductDetail {...props} />);

    expect(screen.getByText('En Stock')).toBeTruthy();
    expect(screen.getByText('SKU: ASIN123')).toBeTruthy();
    expect(screen.getByText('$99.99 MX')).toBeTruthy();
    expect(screen.getByText('IVA incluido')).toBeTruthy();
});
