/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import FiltersCategory from './index';

test('El componente FiltersCategory se renderiza correctamente', () => {
    const props = {
        title: 'Precio',
        filters: [
            { value: 'Filtro 1' },
            { value: 'Filtro 2' },
            { value: 'Filtro 3' },
        ],
    };

    render(<FiltersCategory {...props} />);

    expect(screen.getByText('Precio')).toBeTruthy();

    props.filters.forEach((filter) => {
        expect(screen.getByText(filter.value)).toBeTruthy();
    });
});
