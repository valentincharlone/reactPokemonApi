import { combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import pokeReducer from './pokeDucks';
import usuarioReducer, {leerUsuarioAccion} from './usuarioDucks';

 
const rootReducer = combineReducers({
    pokemones: pokeReducer,
    usuario: usuarioReducer
});
 
export default function generateStore() {
    const store = configureStore({
        reducer: rootReducer
    });
    leerUsuarioAccion()(store.dispatch)
    return store;
}
