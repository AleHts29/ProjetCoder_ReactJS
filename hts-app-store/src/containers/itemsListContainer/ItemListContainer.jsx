import React from 'react'
import {useEffect, useState} from 'react'
import {getData} from '../../utils/const'
import CardItemsComponent from '../../componets/cardsComponents/Card'
import {ButtonComponent} from '../../componets/ButtonComponent'
import {ItemComponent} from '../../componets/buttonCountComponent/ItemCount'
import { Link } from 'react-router-dom'



const HomeContainer = ({greeting}) => {        
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
  console.log("antes de waitForData");
  waitForData();
  console.log("despues del waitForData");
}, [])

if (productos.length > 0){
  console.log(productos);
}

return (
<div className ="App">
  <header className = "App-header">    
    <h1 className="text-dark text-center">{greeting}</h1>
    <button><Link to={'/detail'}>Ir a detalle de producto</Link></button>
    <div className="container ">
      <div className="row">
        {productos.map(element => {  
          return(
          
            
            // <div key={element.id}>
              <CardItemsComponent productData={element} > 
                <ItemComponent productData={element} text={'Agregar al Carrito'}/>
              </CardItemsComponent>
            // </div>
          )
        })}
      </div>
    </div>

    <div className="m-3">
        <ButtonComponent text={'Ver mas productos!!'}/> 
    </div>
             
  </header>
</div> 
       
    )
}

export default HomeContainer
