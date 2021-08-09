import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {useStateValue} from '../../context/shopProvider/ShopProvider'
import accounting from 'accounting'
import * as ReactBootStrap from 'react-bootstrap'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';

const CardWidget = () => {
const [{basket}, dispatch] = useStateValue();
const [{cantidadTotal}] = useStateValue();
   
    
    return (
        <div className="text-white d-flex mr-5 mt-1" size="lg">
        {/* <div><FiShoppingCart/></div>  */}
        {/* <ReactBootStrap.Nav.Link >Nº Products: {0} </ReactBootStrap.Nav.Link>         */}
            <div>
            <ReactBootStrap.NavDropdown FiShoppingCart id="collasible-ReactBootStrap.Nav-dropdown">
                       
            <div class="container" style={{width:'100%', background: '#83c5be'}}>
                <div className='sm-12 p-3' >
                <table className="table md-12">
                    <thead>
                        <tr className="col">
                            <th><strong>CART LIST ITEMS</strong> </th>
                        </tr>
                    </thead>
                    {cantidadTotal == 0 ?
                    <tfoot>
                        <tr id="footer">
                            <th scope="row" colspan="5"> No items yet!</th>
                        </tr>
                    </tfoot> 
                    :
                    basket?.map((item) => (
                        <div className='d-flex m-2' >
                            <p className='mr-3'>{item.name}</p>
                            <p className='ml-auto'>{accounting.formatMoney(item.price)}</p>
                        </div>
                    ))
                    }
                </table>
                    <Link to='checkout-page' style={{ textDecoration: 'none' }}>
                    <IconButton aria-label="show cart items">
                        <strong>go to CART</strong>
                        
                    </IconButton>
                    </Link>
                </div>
            </div>
        </ReactBootStrap.NavDropdown> 
      </div>
      
        </div>
    )
}

export default CardWidget



