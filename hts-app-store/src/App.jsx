import React from 'react'
import './App.css';
// import { Navbar } from '@material-ui/core';
import Product from './componets/cardsComponents/Product'
import ItemListContainer from './containers/itemsListContainer/ItemListContainer';
import CheckoutContainer from './containers/checkOutContainer/CheckOutContainer';
import Navbar from './componets/navbarComponents/Navbar'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div >
        <Navbar />
        <Switch>
          <Route path ='/checkout-page'>
            <CheckoutContainer/>
          </Route>
          <Route path ='/'>
            <ItemListContainer/>
          </Route>
          
        </Switch>
        {/* <CheckoutContainer/> */}
      </div>   
    </Router>
      
   
  )
}

export default App

