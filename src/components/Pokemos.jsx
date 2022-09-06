import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion, unPokeDetalleAccion } from '../redux/pokeDucks'
import Details from './Detalle'

const Pokemos = () => {

    const dispatch = useDispatch()
    const pokemones = useSelector( sotre => sotre.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    React.useEffect (() => {
        const fetchData = () => {
            dispatch(obtenerPokemonesAccion())
        }
        fetchData()
    }, [dispatch])

    

  return (
    <div className='row'>
        <div className='col-md-6'>
            <h2 className='m-2'>POKEBOLA</h2>    
            <div className='d-flex justify-content-between'>

                {
                    pokemones.length === 0 &&
                    <button onClick={() => dispatch(obtenerPokemonesAccion())} className='btn btn-dark m-2'>GET</button>

                }

                {
                    next &&
                    <button onClick={() => dispatch(siguientePokemonAccion())} className='btn btn-dark m-2'>Next</button>
                }

                {
                    previous &&
                    <button onClick={() => dispatch(anteriorPokemonAccion())} className='btn btn-dark m-2'>Previous</button>
                }
            </div>

            

            <ul className="list-group mt-3 text-uppercase">
            {
                pokemones.map(item => (
                    <li className="list-group-item m-1" key={item.name} >
                        {item.name}
                        <button 
                            className="btn btn-dark btn-sm float-end "
                            onClick={() => dispatch(unPokeDetalleAccion(item.url))}
                        >
                            Detalle
                        </button>
                    </li>
                ))
            }
        </ul>
        
        </div>
        <div className="col-md-6 mt-4">
            <h2>DETAILS POKEMON</h2>
            <Details></Details>
        </div>
    </div>
  )
}

export default Pokemos