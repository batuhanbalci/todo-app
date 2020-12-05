import { combineReducers, createStore } from 'redux';
import todo from './todo';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
    todo
});
const store = createStore(rootReducer, devTools);

export default store;