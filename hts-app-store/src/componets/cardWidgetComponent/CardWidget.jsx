import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'

import * as ReactBootStrap from 'react-bootstrap'

const CardWidget = ({cart}) => {
    


    // let contador = 0;
    // Object.values(cart).forEach(element => {
    //     // contador += element.price;
    //     console.log(element.price)
    // })
    // // console.log(cart)
    // console.log(contador);

    // // let precio = cart.map(function(producto){
    // //     console.log(producto)
    // //     return producto;
        
    // // })
    
    
    return (
        <div className="text-white d-flex mr-5 mt-1" size="lg">
        <div><FiShoppingCart/></div> 
        <ReactBootStrap.Nav.Link >Nº Products: {cart.length} </ReactBootStrap.Nav.Link>        
            <div>
            <ReactBootStrap.NavDropdown FiShoppingCart id="collasible-ReactBootStrap.Nav-dropdown">
                       
            <div class="container">
                <table class="table md-12 m-4">
                    <thead>
                        <tr class="col">
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col ">Cantidad</th>
                            <th scope="col">Total</th>
                            
                        </tr>
                    </thead>
                    <tbody id="items"></tbody>
                    <tfoot>
                        <tr id="footer">
                            <th scope="row" colspan="5"> Carrito vacio - llenar</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </ReactBootStrap.NavDropdown> 
      </div>
      
        </div>
    )
}

export default CardWidget



