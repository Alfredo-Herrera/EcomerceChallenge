import { combineReducers } from 'redux';
import Shopping from './shopping';

// funcion para importar los estados de redux
const rootReducer = combineReducers({
    main: Shopping,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
