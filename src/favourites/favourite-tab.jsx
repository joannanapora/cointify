import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Chips from './chip';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
    width: "100%",
    display: 'flex',
    justifyContent: 'flex-end'
  },
  image:{
    maxWidth:theme.spacing(3),
    maxHeight:theme.spacing(3),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
},
margin: {
    width: '100%',
    margin: theme.spacing(5,2,2,2),
    maxWidth: theme.spacing(30),
    justifyContent: 'center'
  },  
}));

const FavouriteTab = ({coinPrice, coinImage, coinName, coin24h, chip, onChipChange, onKeyDown, handleChipDelete, postValues,coinIcon, ...props }) => {
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              <img className={classes.image} alt='coin-image' src={coinImage}></img>
              {coinName}
            </Typography>
          </Grid>
            <Typography {...props} variant="h6">
            {coin24h}
            </Typography>
          <Grid item>
            <Typography gutterBottom variant="h6">
            {coinPrice}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <div style={{margin: '15px'}}>
          My active {coinName} price notifications:
        </div>
        {postValues.length === 0 ? 
    <p style={{display: 'flex', width: '100%', justifyContent: 'center'}}>No Notifications</p>:
    <Chips coinIcon={coinIcon} postValues={postValues} handleChipDelete={handleChipDelete} />
    }
        <FormControl label="Amount" className={classes.margin}>
          <h4 htmlFor="standard-adornment-amount">Inform me when {coinName} price is:</h4>
          <Input
          style={{width:'100%', justifyContent: 'center'}}
          disabled={postValues.length >= 10}
           value={chip}
           id="keywords"
           label="Amount"
           onKeyDown={onKeyDown}
           onChange={onChipChange} 
            type='number'
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
      <div className={classes.section3}>
        <Button  style={{color:'#008080'}}>Cancel {coinName} Notifications</Button>
      </div>
    </div>
  );
}


export default FavouriteTab;