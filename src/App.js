import React from "react";
import { Provider } from "react-redux";
import store from './Store'
import Jugadores from './components/Jugadores'
import EquipoSeleccionado from "./components/EquipoSeleccionado";
import "./Styles/styles.scss"

const App = () => (
  <Provider store={store}>
    <main>
      <h1>React Practica</h1>
      <Jugadores />
      <EquipoSeleccionado/>
    </main>
  </Provider>
);

export default App;
