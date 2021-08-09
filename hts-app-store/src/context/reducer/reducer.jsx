import { useStateValue } from "../shopProvider/ShopProvider";

export const initialState = {
    basket:[],
    cantidadTotal: 0,
    amount: 1,
}



// const [{amount}, setAmount] = useStateValue();


export const actionTypes = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_ITEM: 'REMOVE_ITEM',
    ADD_ITEM: 'ADD_ITEM'
}

// Funcion para calcular el monto total de todos los productos (usando metodo reduce)
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, ppp) =>  ppp.price + amount, 0)
    // console.log(total);

}


const reducer = (state, action) => {
    
    switch(action.type){
        case 'ADD_TO_BASKET': 
            if (state.cantidadTotal >= 0){
                    for(let i in state.basket){
                    if(state.basket[i].id === action.item.id){
                        console.log('repetido')
                        return {
                            ...state,
                            basket:[...state.basket],
                            // cantidad: state.cantidadTotal + 1,
                            
                        };
                    
                    }else
                    console.log('Se agrega el producto de forma exitosa')
                }
                
                return {
                    ...state,
                    basket:[...state.basket, action.item],
                    cantidadTotal: state.cantidadTotal + 1,
                    
                    
                };
                
            }
            
            
            
        case 'REMOVE_ITEM':
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket = [...state.basket];
            if (index >= 0){
                newBasket.splice(index, 1)
            }else {console.log('Can´t remove product')}
            
            return {
                ...state,
                basket: newBasket,
                cantidadTotal: state.cantidadTotal - 1
            }

        case 'ADD_ITEM':
            const index2 = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket2 = [...state.basket];
            // if (index2 >= 0){
            //     newBasket2.splice(index2, 1)
            // }else {console.log('Can´t remove product')}
            
            console.log('Hola');
            return {
                ...state,
                basket: newBasket2,
                cantidadTotal: state.cantidadTotal + 1,
                amount: state.amount + 1,
            }
            
            ;
            
        // }
            


        default: return state;
    }
}

export default reducer