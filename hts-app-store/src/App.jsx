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
import { CartContexComponent } from './context/cartContext/CartContext';
import Checkout from './componets/checkoutForm/Checkout';
import Error404 from './componets/Error404/Error404';

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
      <CartContexComponent>
      <div >
        <Navbar />
        <Switch>
          <Route exact path ='/signup'>
            <SignUp/>
          </Route>
          <Route exact path ='/signin'>
            <SignIn/>
          </Route>
          <Route exact path ='/checkout-page'>
            <CheckoutContainer/>
          </Route>
          <Route exact path ='/checkout'>
            <Checkout/>
          </Route>
          <Route path ='/category/:id' component={ItemListContainer}/>
          <Route exact path ='/' component = {ItemListContainer}/>
          <Route path ='*' component={Error404}/>
        </Switch>
        {/* <CheckoutContainer/> */}
      </div>
    </CartContexComponent>

    </Router>
      
   
  )
}

export default App

