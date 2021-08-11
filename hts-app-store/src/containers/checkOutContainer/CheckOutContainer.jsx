import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import KeyboardReturnRoundedIcon from '@material-ui/icons/KeyboardReturnRounded';

import CheckOutCard from '../../componets/checkOutCardComponent/CheckOutCard'
import TotalComponent from '../../componets/totalComponent/TotalComponent'
import { useStateValue } from '../../context/shopProvider/ShopProvider';
import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme)=>(
    {
        root:{
            flexGrow: 1,
            padding: '2rem',
            textDecoration: 'none'
        },
        title: {
            flexGrow: 1,
            // color: "#ffffff",
            textAlign: 'center',
            marginRight: '10px'
          },
        menuButton: {
        color: '#83c5be',
        },
        link:{
        textDecoration: 'none',
        textDecoration: 'none'
        }
    }
));


const CheckoutContainer = () => {
    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();
    const [{cantidadTotal}] = useStateValue();


    function FormRow(){
        return(
            <React.Fragment>
                {basket?.map((item)=>(
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckOutCard key={item.id} product={item}/>
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
           
            <Grid  item xs={12} container spacing={2}>
                {cantidadTotal == 0 ? 
                    <Grid className='' item xs={12} container spacing={2}>
                        <Grid  item xs={2}  spacing={2}>
                            <Link to='/category/home' className={classes.link} style={{ textDecoration: 'none' }}>
                                <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                                    <KeyboardReturnRoundedIcon/>
                                    <strong><h4>Back to list</h4></strong>
                                </IconButton>
                            </Link>
                        </Grid> 
                        <Grid  item xs={12} spacing={2}> 
                            <Typography variant="h6" className={classes.title}>
                                Your Cart is Empty
                            </Typography>
                            
                        </Grid>  
                    </Grid>        
                    : 
                   
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography align='center' gutterBottom variant='h4'>
                                Shopping Cart
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8} md={9} container spacing={2}>
                            <FormRow/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Typography align='center' gutterBottom variant='h4'>
                                <TotalComponent />
                            </Typography>
                        </Grid>
                    </Grid>
                    
                }
            </Grid>
            
        </div>
    )
}

export default CheckoutContainer;