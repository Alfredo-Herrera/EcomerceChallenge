import { Typography } from '@mui/material';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../redux/reduxTest/rootReducer';
import MainLayout from './MainLayout';

// eslint-disable-next-line no-undef
describe(' Pruebas para el compoenete <MainLayout /> ', () => {
    // eslint-disable-next-line no-undef
    test('Prueba en el Header para encontrar el Texto de un Link ', async () => {
        const wrapper = await render(
            <Provider store={createStore(rootReducer)}>
                <MainLayout>
                    <Typography>Esto es un error</Typography>
                </MainLayout>
            </Provider>
        );
        const TEXT = await wrapper.getByText('Esto es un error');
        // eslint-disable-next-line no-undef
        expect(await TEXT).toBeInTheDocument();
    });
});
