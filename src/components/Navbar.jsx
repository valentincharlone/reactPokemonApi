import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {cerrarSesionAccion} from '../redux/usuarioDucks'

import { withRouter } from 'react-router-dom'

const Navbar = (props) => {
    const dispatch = useDispatch()

    const cerrarSesion = () => {
        dispatch(cerrarSesionAccion())
        props.history.push('/login')
    }

    return (
        <div className="navbar navbar-dark bg-dark border-2">
            <Link to="/" className="navbar-brand m-2">Poke API</Link>
            <div>
                <div className="d-flex">
                    <NavLink 
                        className="btn btn-dark mr-2" 
                        to="/"
                        exact
                    >
                        Pokemon
                    </NavLink>
                    <NavLink 
                        className="btn btn-dark mr-2" 
                        to="/login"
                        exact
                    >
                        Login
                    </NavLink>
                    <button
                        className="btn btn-dark"
                        onClick={()=> cerrarSesion()}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)