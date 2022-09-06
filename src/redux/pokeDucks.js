import axios from "axios"

// constantes
const dataInicial = {
    count: 0,
    next: null,
    previus: null,
    results: [],
    offset:0

}
const GET_POKEMONES_EXITO = 'GET_POKEMONES_EXITO'
const NEXT_POKEMONES_EXITO = 'NEXT_POKEMONES_EXITO'
const ANTERIOR_POKEMONES_EXITO = 'ANTERIOR_POKEMONES_EXITO'
const POKE_INFO_EXITO = 'POKE_INFO_EXITO'

// reducer
export default function pokeReducer (state = dataInicial, action){
    switch(action.type){
        case GET_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case NEXT_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case ANTERIOR_POKEMONES_EXITO:
                return {...state, ...action.payload}
        case POKE_INFO_EXITO:
                return {...state, unPokemon: action.payload}
        default: 
            return state      
    }
}
  
//actiones 
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

    if(localStorage.getItem('offset=0')){
        console.log('datos guardados')
        dispatch({
            type: GET_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })
        //salimos de la funciom
    }
    else {
        console.log('datos api')
    

        try {
            const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'
            const res = await axios.get(url)
            console.log(url)
            dispatch({
                type: GET_POKEMONES_EXITO,
                payload: res.data
            })
            localStorage.setItem('offset=0', JSON.stringify(res.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const siguientePokemonAccion = () => async (dispatch, getState) => {

    // const {offset} = getState().pokemones
    // const siguiente = offset + 20
    const {next} = getState().pokemones

    

    if(localStorage.getItem(next)){
        console.log('datos guardados')
        dispatch({
            type: GET_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(next))
        })
        //salimos de la funciom
        return
    }


    try {
        console.log('datos api')
        const res = await axios.get(next)
        dispatch({
            type:NEXT_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem(next, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const anteriorPokemonAccion = () => async (dispatch, getState) => {

    const {previous} = getState().pokemones

    if(localStorage.getItem(previous)){
        console.log('datos guardados')
        dispatch({
            type: GET_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(previous))
        })
        //salimos de la funciom
        return
    }
    try {
        const res = await axios.get(previous)
        dispatch({
            type:NEXT_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem(previous, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const unPokeDetalleAccion = (url) => async (dispatch, getState) => {
    
    if(localStorage.getItem(url)){
        dispatch({
            type: POKE_INFO_EXITO,
            payload: JSON.parse(localStorage.getItem(url))
        })
        return
    }
    try {
        const res = await axios.get(url)
        // console.log(res.data)
        dispatch({
            type: POKE_INFO_EXITO,
            payload: {
                nombre: res.data.name,
                foto: res.data.sprites.front_default,
                alto: res.data.height,
                ancho: res.data.weight
            }
        })
        localStorage.setItem(url, JSON.stringify({
            nombre: res.data.name,
            foto: res.data.sprites.front_default,
            alto: res.data.height,
            ancho: res.data.weight
        }))

    } catch (error) {
        console.log(error.response)
    }
}
