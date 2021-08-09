import {useState} from 'react'
import CardWidget from '../cardWidgetComponent/CardWidget'
import {ButtonComponent} from '../ButtonComponent/index'
import {actionTypes} from '../../context/reducer/reducer'
import { useStateValue } from '../../context/shopProvider/ShopProvider';

export const ItemComponent = ({id, text}) => {
    

const [cart, setCart] = useState([]);
const [{amount}, setAmount] = useStateValue();
const [{basket}, dispatch] = useStateValue();
console.log(amount);
console.log(cart);


const addItem = () => dispatch({
    type: actionTypes.ADD_ITEM,
    id:id,
  })

let stock = 15;
let minAmount = 0;

    return (
    <>
    <div className="container d-flex justify-content-center ">
        <div className='border'>
            <button className="btn  btn-up btn-sm "
                onClick = {() => {
                    if(amount > minAmount){
                        setAmount(amount-1);
                    }
                }}
            >
                -
            </button>
        </div>
            <p className="ml-3 mr-3 mt-1 mb-0">{amount}</p>
            <div className='border'>
            <button className="btn  btn-down btn-sm "
            onClick = {() => {
                if (amount == stock){
                    return stock;
                }
                else{
                    // setAmount(amount);
                    addItem();
                
                }
                
           }}
            >
                +
            </button>
            </div>
        

            
    </div>

    {/* <div className="mt-3">
        <button onClick={() => {setCart([...cart, {productData}])}}> {'hola'}</button>
    </div> */}
    
    {/* capturo la info al dar click a agregar al carrito
    <CardWidget cart={cart}/> */}
    </>
    )
}