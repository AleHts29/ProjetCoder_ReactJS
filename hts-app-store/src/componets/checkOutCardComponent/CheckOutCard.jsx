import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete'
import accounting from 'accounting'
import { useStateValue } from '../../context/shopProvider/ShopProvider';
import {actionTypes} from '../../context/reducer/reducer'
import { ItemComponent } from '../buttonCountComponent/ItemCount';




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent:'space-between',
    textAlign: 'center',
  },
  cardRating: {
    display: 'flex',
    marginLeft: '3px'
  },
  
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CheckOutCard({product:{id, name, title, desciption, image, price, rating}}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })



  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} >
            <h6>HT-s</h6>
          </Avatar>
        }
        action={
          <Typography
          className={classes.action}
          variants='h5'
          color='textSecondary'>
            {accounting.formatMoney (price, '$')}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Producto - 1"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        
        {/* Aumentar canridad*/}
        <div className='sm-12'>
          <ItemComponent id={id}/>
        </div>
        <IconButton>
            <DeleteIcon onClick={removeItem}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
