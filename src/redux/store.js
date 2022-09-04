import { combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import pokeReducer from './pokeDucks';
 
const rootReducer = combineReducers({
    pokemones: pokeReducer
});
 
export default function generateStore() {
    const store = configureStore({
        reducer: rootReducer
    });
    return store;
}
