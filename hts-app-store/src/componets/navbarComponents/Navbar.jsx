import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu';
import { ShoppingCart } from '@material-ui/icons';
import {Badge} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/shopProvider/ShopProvider';
import CardWidget from '../cardWidgetComponent/CardWidget';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
    // color: '#dd2c00' ,
  },
  title: {
    flexGrow: 1,
    color: "#ffffff",
    textAlign: 'end',
    marginRight: '10px'
  },
  bgColor:{
    backgroundColor:"#263238"
  },
  link:{
    textDecoration: 'none',
  }

}));

export default function Navbar() {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();
  const [{cantidadTotal}] = useStateValue();


  function CardWidgetList(){
    return(
        <React.Fragment>
           
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    
                </Grid>
        
        </React.Fragment>
    );
}

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bgColor}>
        <Toolbar >
          <Link to='/' className={classes.link} style={{ textDecoration: 'none' }}>
            <IconButton edge="start" className={classes.menuButton}   color="primary" aria-label="menu">
              <strong><h4>HT - store</h4></strong>
            </IconButton>
          </Link>
          
          <Typography variant="h6"  className={classes.title}>
            Hello Juan
          </Typography>
          <Button variant="outlined" color="primary">Login</Button>
          <Link to='checkout-page'>
          <IconButton aria-label="show cart items" color="primary">
            <Badge badgeContent={cantidadTotal} color="secondary">
              <ShoppingCart fontSize="large"/>
            </Badge>
            <CardWidget/>
          </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

