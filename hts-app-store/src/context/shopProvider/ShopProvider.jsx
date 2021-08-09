import { createContext, useContext, useReducer } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({reducer, initialstate,  children}) => (
    <ShopContext.Provider value ={useReducer(reducer, initialstate)}>
        {children}
    </ShopContext.Provider>
);


// Permite consumir los datos desde cualquier componente
export const useStateValue = () => useContext(ShopContext);