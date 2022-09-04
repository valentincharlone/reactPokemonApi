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
            <h2>POKEBOLA</h2>    
            <div className='d-flex justify-content-between'>

                {
                    pokemones.length === 0 &&
                    <button onClick={() => dispatch(obtenerPokemonesAccion())} className='btn btn-dark'>GET</button>

                }

                {
                    next &&
                    <button onClick={() => dispatch(siguientePokemonAccion())} className='btn btn-dark'>Next</button>
                }

                {
                    previous &&
                    <button onClick={() => dispatch(anteriorPokemonAccion())} className='btn btn-dark'>Previous</button>
                }
            </div>

            

            <ul className="list-group mt-3 text-uppercase">
            {
                pokemones.map(item => (
                    <li className="list-group-item" key={item.name} >
                        {item.name}
                        <button 
                            className="btn btn-dark btn-sm float-end"
                            onClick={() => dispatch(unPokeDetalleAccion(item.url))}
                        >
                            Detalle
                        </button>
                    </li>
                ))
            }
        </ul>
        
        </div>
        <div className="col-md-6 mt-1">
            <h2>Details Pokemon</h2>
            <Details></Details>
        </div>
    </div>
  )
}

export default Pokemos