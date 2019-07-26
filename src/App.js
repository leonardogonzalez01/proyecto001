import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import Formulario from "./views/Wines/Formulario";
import Wines from '../src/views/Wines/Wines'
import Filtro from './views/Wines/Filtro';


function App() {
    return (
        <Provider store={store}>
            <div className="row justify-content-md-center">
                <Formulario />
                <Filtro />
                <Wines />
            </div>
        </Provider>
    );
}

export default App;
