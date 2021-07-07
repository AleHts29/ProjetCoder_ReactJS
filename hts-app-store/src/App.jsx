import React from 'react'
import './App.css';
import Navbar from './componets/navbarComponents/Navbar'
import { NAME_APP } from './utils/const';
import HomeContainer from './containers/itemsListContainer/ItemListContainer';
import ItemDetail from './containers/itemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar count={2}/>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route  path="/detail" component={ItemDetail} />
        <Route  path="*" component={() => <h1>Error: 404 - Undefined</h1>} />
      </Switch>
    </BrowserRouter>
      
   
  )
}

export default App

