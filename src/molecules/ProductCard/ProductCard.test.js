/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import ProductCard from './index';

test('El componente ProductCard se renderiza correctamente', () => {
    const props = {
        thumbnail: '/logo.png',
        title: 'iphone 5g',
        details: {
            total: 99.99,
        },
        asin: 'ASIN123',
    };

    render(<ProductCard {...props} />);

    expect(screen.getByText('iphone 5g')).toBeTruthy();

    expect(screen.getByText('$99.99')).toBeTruthy();
    expect(screen.getByText('Envío gratis')).toBeTruthy();

    expect(screen.getByText('Ver Detalles')).toBeTruthy();
});
