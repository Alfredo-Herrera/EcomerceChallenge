import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PaymentMethods from './index';

// eslint-disable-next-line no-undef
describe(' Pruebas para el compoenete <MainLayout /> ', () => {
    // eslint-disable-next-line no-undef
    test('Prueba en el Header para encontrar el Texto de un Link ', async () => {
        const wrapper = render(<PaymentMethods />);
        const image = screen.getByAltText('dataPayments');
        // eslint-disable-next-line no-undef
        expect(image).toBeInTheDocument();
        // eslint-disable-next-line no-undef
        expect(image).toHaveAttribute(
            'src',
            '/_next/image?url=%2Fexample.webp&w=3840&q=75'
        );
    });
});
