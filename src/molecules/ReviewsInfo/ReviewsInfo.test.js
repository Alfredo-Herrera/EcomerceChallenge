/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import ReviewsInfo from './index';

test('El componente ReviewsInfo se renderiza correctamente', () => {
    const props = {
        rating: 4.5,
        total_reviews: 100,
    };

    render(<ReviewsInfo {...props} />);

    expect(screen.getByText('(100)')).toBeTruthy();
});
