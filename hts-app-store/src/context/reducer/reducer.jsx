import { useStateValue } from "../shopProvider/ShopProvider";

export const initialState = {
    basket:[],
    cantidadTotal: 0,
    amount: 1,
    arr: 0,
    user: null,
}



// const [{amount}, setAmount] = useStateValue();


export const actionTypes = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_ITEM: 'REMOVE_ITEM',
    ADD_ITEM: 'ADD_ITEM',
    LESS_ITEM: 'LESS_ITEM',
    SET_USER: 'SET_USER',
    EMPTY_BASKET: 'EMPTY_BASKET',

}

// Funcion para calcular el monto total de todos los productos (usando metodo reduce)
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) =>  item.totalPrice + amount, 0)
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
                cantidadTotal: state.cantidadTotal - state.basket[index].amountItem
            }

        case 'ADD_ITEM':
            const index2 = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket2 = [...state.basket];
            if (index2 >= 0){
                // newBasket2.splice(index2, 1)
                newBasket2[index2].amountItem += 1;
                newBasket2[index2].totalPrice = (newBasket2[index2].price * newBasket2[index2].amountItem);
                console.log(newBasket2[index2].name)
                console.log(newBasket2[index2].amountItem)
            }
            return {
                ...state,
                basket: newBasket2,
                arr: index2,
                cantidadTotal: state.cantidadTotal + 1
            }
        
        case 'LESS_ITEM':
            const index3 = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket3 = [...state.basket];
            if (newBasket3[index3].amountItem <= 1){
                newBasket3.splice(index3, 1)
                return{
                    ...state,
                    basket: newBasket3,
                    cantidadTotal: state.cantidadTotal - 1
                }
                
            }
                else
                    newBasket3[index3].amountItem -= 1;
                    newBasket3[index3].totalPrice = (newBasket3[index3].price * newBasket3[index3].amountItem);
                
                
                return{
                    ...state,
                    basket: newBasket3,
                    cantidadTotal: state.cantidadTotal - 1
                }
                

                // newBasket2.splice(index2, 1)
                // console.log(newBasket2[index2].name)
                // console.log(newBasket2[index2].amountItem)
            
            return {
                ...state,
                basket: newBasket3,
                arr: index3,
                cantidadTotal: state.cantidadTotal - 1
            }

        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: action.basket,
                cantidadTotal: 0,
                user: null,
            }
                

        default: return state;
    }
}

export default reducer