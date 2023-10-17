/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import InfoShipments from './index';

test('El componente InfoShipments se renderiza correctamente', () => {
    const props = {
        url: 'https://www.google.com/',
    };

    render(<InfoShipments {...props} />);

    expect(screen.getByText('Url:')).toBeTruthy();

    const linkElement = screen.getByText('Link');
    expect(linkElement).toBeTruthy();
    expect(linkElement.getAttribute('href')).toBe('https://www.google.com/');
});
