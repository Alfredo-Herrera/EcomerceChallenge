import { combineReducers } from 'redux';
import Shopping from './shopping';

const rootReducer = combineReducers({
    main: Shopping,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
