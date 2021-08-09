import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Product from '../../componets/cardsComponents/Product';
import {products} from '../../data/product-data'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '50px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ItemListContainer() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <Grid container spacing={3}>
        {
          products.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Product key={product.id} product={product}/>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}
