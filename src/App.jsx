import React from "react";
import Pokemos from "./components/Pokemos";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="container mt-3">
      <Navbar component={Navbar}></Navbar>
      <Switch>
        <Route component={Pokemos} path ="/" exact>
          
        </Route>
        <Route component={Login} path ="/login" exact>
          
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
