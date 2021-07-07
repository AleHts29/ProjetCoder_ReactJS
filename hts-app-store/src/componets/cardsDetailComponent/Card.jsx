import React from 'react';
import img1 from './assets/iphone12.jpeg';
import './styls.css'
import {ButtonComponent} from '../ButtonComponent'
import {ItemComponent} from '../buttonCountComponent/ItemCount'
const CardDetailComponent = ({productData, children}) => {
    return (

    <>
    
        <div className="d-flex">
            <div className = "col-12 mb-3 col-md-4 bg-white ">    
                <img src={productData.img} alt="" className="tamanoImg"/>
            </div>  
            <div className="col-12 mb-3 col-md-8 bg-dark">
                <div className = "card-body  text-center">
                    <h5 className = "card-title text-white"> {productData.title}</h5>
                    <strong className="text-warning">Price: $ {productData.price}</strong>
                </div>
                <div className="m-3 text-center">
                    {children}
                </div>
            </div>
        </div>
    
    </>
    )
}

export default CardDetailComponent


