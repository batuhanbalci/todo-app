import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';

const store = configureStore({ 
    reducer: combineReducers({
        todo: todoReducer
    })

});

export default store;