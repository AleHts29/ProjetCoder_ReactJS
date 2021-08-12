import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img01 from './img/error.jpeg'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    marginTop: 20,
    alignContent:'center',
    margin: 'auto',
    borderStyle: 'none'
  },
  media: {
    height: 640,
  },
  btn: {
    margin: 'auto',
    color: '#e9c46a'
  },
});

export default function Error404() {
  const classes = useStyles();

  return (

    // <Grid container spacing={3}>
    // <Grid item xs={12} sm={6} md={4} lg={3} >

    <div className={classes.root}>
        <CardMedia
          className={classes.media}
          image= {img01}
          title="Contemplative Reptile"
        />
        
      <CardActions >
      <Link to='/category/home' className={classes.btn} style={{ textDecoration: 'none' }}>
        <IconButton  size="small">
          <strong style={{color: '#00afb9'}}><h4>- Reload -</h4></strong>
        </IconButton>
      </Link>
      </CardActions>
    </div>
    // </Grid>
    // </Grid>
  );
}