/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React from 'react';
import AddProductsCart from './index';

// eslint-disable-next-line no-undef
test('El componente AddProductsCart renderiza correctamente', async () => {
    const wrapper = await render(<AddProductsCart />);
    expect(wrapper.getByText('Cantidad:'));
    expect(wrapper.getByText('1 unidad'));
});
