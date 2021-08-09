import React from 'react'
import {useEffect, useState} from 'react'
import {getData} from '../../utils/const'
import CardDetailComponent from '../../componets/cardsDetailComponent/Card'
import {ButtonComponent} from '../../componets/ButtonComponent'
import {ItemComponent} from '../../componets/buttonCountComponent/ItemCount'
import { Link } from 'react-router-dom'
import '../style.css'



const ItemDetail = ({greeting}) => {        
// const product = {id:1, name:'iphone-12', price:1050, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis minima quo repellat'};

let [productos, setPreductos] = useState([]);


// Actualizo los estados
useEffect(() => {
  const waitForData = async () => {
    let data =  await getData('tecnologia');
    let aux = data.map(element => {
    return{
      id: element.id,
      title: element.title,
      img: element.thumbnail,
      price: element.price,
      stock: element.available_quantity
    }
  })
  setPreductos(aux);
    // console.log(data);
  }
  waitForData();
}, [])

if (productos.length > 0){
  console.log(productos[0]);
  return (
    <div className ="App">
    <header className = "App-header">    
        <h1 className="text-dark text-center m-5">{greeting}</h1>
        
        <div className="container ">
        <div className="row">
        <CardDetailComponent productData={productos[0]} > 
                    <ItemComponent productData={productos[0]} text={'Agregar al Carrito'}/>
        </CardDetailComponent>  
        </div>
        </div>

        <div className="m-3">
          <Link to={'/'}>
           <ButtonComponent text={'Ver mas productos!!'}/> 
          </Link>
            
        </div>          
    </header>
    </div>      
)
  }

return(
  <div className="container text-center">
    <h1>Cargando data</h1>
  </div>
  
)
  

}

export default ItemDetail


