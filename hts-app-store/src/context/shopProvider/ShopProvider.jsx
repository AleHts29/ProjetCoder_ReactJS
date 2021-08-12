import { createContext, useContext, useReducer } from "react";


export const ShopContext = createContext();

export const ShopProvider = ({reducer, initialstate,  children}) => (
    <ShopContext.Provider value ={useReducer(reducer, initialstate)}>
        {children}
    </ShopContext.Provider>
);








export const useStateValue = () => useContext(ShopContext);