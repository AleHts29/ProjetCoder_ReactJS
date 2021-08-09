import {useState} from 'react'
import CardWidget from '../cardWidgetComponent/CardWidget'
import {ButtonComponent} from '../ButtonComponent/index'
import {actionTypes} from '../../context/reducer/reducer'
import { useStateValue } from '../../context/shopProvider/ShopProvider';

export const ItemComponent = ({itemId, amountItem}) => {
    // 

const [cart, setCart] = useState([]);
const [amount, setAmount] = useState(1);
const [{basket}, dispatch] = useStateValue();
const [{arr}] = useStateValue();
// console.log(basket[arr].name);
// console.log(itemId);




const addItem = () => dispatch({
    type: actionTypes.ADD_ITEM,
    id:itemId,
  })

const lessItem = () => dispatch({
    type: actionTypes.LESS_ITEM,
    id:itemId,
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
                        // setAmount(amount-1);
                        lessItem();
                    }
                }}
            >
                -
            </button>
        </div>
            <p className="ml-3 mr-3 mt-1 mb-0">{amountItem}</p>
            <div className='border'>
            <button className="btn  btn-down btn-sm "
            onClick = {() => {
                if (amount == stock){
                    return stock;
                }else{
                    // setAmount(amount +1);
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