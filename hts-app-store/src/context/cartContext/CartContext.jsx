import { createContext } from "react";
import { useEffect, useState } from "react";
import { getFirestore } from "../../fireBase/fireBase";

// Permite consumir los datos desde cualquier componente
export const CartContext = createContext();

export const CartContexComponent = ({children}) => {
    const [listProducts, setProducts] = useState([]);

    useEffect(() =>{
        async function getData(){
          //Conexion a base de datos
          const db = getFirestore();
          const Collection = db.collection("product");
          const Response = await Collection.get()
          setProducts(Response.docs.map(element => element.data()));
        }
        getData();
      },[]);
console.log(listProducts);

      return (
            <CartContext.Provider value ={{listProducts}}>
                {children}
            </CartContext.Provider>
      )
}