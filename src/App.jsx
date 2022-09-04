import React from "react";
import { Provider } from "react-redux";
import Pokemos from "./components/Pokemos";
import generateStore from "./redux/store";

function App() {

  const store = generateStore()

  return (
    <Provider store={store} >
        <div className="container mt-3">
          <Pokemos ></Pokemos>
       </div>
    </Provider>
  );
}

export default App;
