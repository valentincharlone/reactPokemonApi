import React from 'react';

import Pokemos from './components/Pokemos';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Perfil from './components/Perfil';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Firebase
import {auth} from './firebase'

function App() {

  // Firebase
  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
          console.log(user)
          if(user){
              setFirebaseUser(user)
          }else{
              setFirebaseUser(null)
          }
      })
    } 
    fetchUser()
}, [])


  // LocalStorage
  const RutaProtegida = ({component, path, ...rest}) => {
    if(localStorage.getItem('usuario')){
      const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
      if(usuarioStorage.uid === firebaseUser.uid){
        console.log('son iguales')
        return <Route component={component} path={path} {...rest} />
      }else{
        console.log('no exite')
        return <Redirect to="/login" {...rest} />
      }
    }else{
      return <Redirect to="/login" {...rest} />
    }
  }

  return firebaseUser !== false ? (
    <Router>
      <div className="container mt-3">
        <Navbar />
        <Switch>
          <RutaProtegida component={Pokemos} path="/" exact/>
          <RutaProtegida component={Perfil} path="/perfil" exact/>
          {/* <Route component={Pokemones} path="/" exact/> */}
          <Route component={Login} path="/login" exact/>
        </Switch>
      </div>
    </Router>
  ) : (<div>Cargando...</div>)
}

export default App;
