/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import CardCategory from './index';

test('El componente CardCategory se renderiza correctamente', () => {
    const props = {
        image: '/logo.png',
        title: 'Zapatos',
    };

    render(<CardCategory {...props} />);

    expect(screen.getByText('Zapatos')).toBeTruthy();

    const imageElement = screen.getByAltText('Zapatos');
    expect(imageElement).toBeTruthy();

    const linkElement = screen.getByRole('link', {
        name: /Zapatos/i,
    });
    expect(linkElement).toBeTruthy();

    const hrefAttribute = linkElement.getAttribute('href');
    expect(hrefAttribute).toBe('/category/Zapatos');
});
