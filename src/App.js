import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Main from './Main/Main.jsx';
import FormContainer from './Form/FormContainer.jsx';
import Header from './Header/Header.jsx';
import NeighborsConteiner from './Neighbors/NeighborsConteiner.jsx';
import RegistrationConteiner from './Registration/RegistrationConteiner.jsx';

const App = (props) => {
  return (
    <div className="wrapper">
        <Header />
        <div>
            <Route path='//' component={ () => <Main />} />
            <Route path='/form' component={ () => <FormContainer />} />
            <Route path='/neighbors' component={ () => <NeighborsConteiner />} />
            <Route path='/registration' component={()=> <RegistrationConteiner /> } />
        </div>
    </div>
  );
}

export default App;
