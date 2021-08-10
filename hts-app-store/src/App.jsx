import React from 'react'
import './App.css';
// import { Navbar } from '@material-ui/core';
import Product from './componets/cardsComponents/Product'
import ItemListContainer from './containers/itemsListContainer/ItemListContainer';
import CheckoutContainer from './containers/checkOutContainer/CheckOutContainer';
import Navbar from './componets/navbarComponents/Navbar'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from './componets/signIn/Signin';
import SignUp from './componets/signup/Signup';
import {useEffect} from 'react';
import {auth} from './fireBase/fireBase'
import { actionTypes } from './context/reducer/reducer';
import { useStateValue } from './context/shopProvider/ShopProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div >
        <Navbar />
        <Switch>
          <Route path ='/signup'>
            <SignUp/>
          </Route>
          <Route path ='/signin'>
            <SignIn/>
          </Route>
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

