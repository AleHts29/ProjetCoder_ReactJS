import React from 'react'
import accounting from 'accounting'
import {Button, makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom';

import {useStateValue}  from '../../context/shopProvider/ShopProvider';
import { getBasketTotal } from '../../context/reducer/reducer';


const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        height: '20vh'
    },
    button:{
        marginTop: '2rem'
    }
}))

const TotalComponent = () => {
    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();
    const [{cantidadTotal}] = useStateValue();

console.log(basket)
const valor = getBasketTotal(basket)
// console.log(cantidadTotal)


    return (
        <div className={classes.root}>
            <h5>Total item: {cantidadTotal}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), '$')}</h5>
            
            <Link to='/checkout'>
                <Button  className={classes.button} variant='contained' color='secondary'>
                    Check Out
                </Button>
            </Link>
            
            
        </div>
    )
    
}

export default TotalComponent
