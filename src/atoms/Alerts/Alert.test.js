import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../redux/reduxTest/rootReducer';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Alerts from './index';

// eslint-disable-next-line no-undef
describe(' Pruebas para el compoenete <Alerts /> ', () => {
    // eslint-disable-next-line no-undef
    test('Prueba en el Alert para encontrar el Texto de una alerta ', async () => {
        const props = { title: 'Error en la prueba', severityError: 'error' };
        const wrapper = await render(
            <Provider store={createStore(rootReducer)}>
                <Alerts {...props} />
            </Provider>
        );
        const TEXT = await wrapper.getByText('Error en la prueba');
        // eslint-disable-next-line no-undef
        expect(await TEXT).toBeInTheDocument();
    });
});
