import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import FavouriteTab from './favourite-tab';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import CoinSelect from './autocomplete';
import Autocomplete from '@material-ui/lab/Autocomplete';




const MOCK_COINS = [
  {
    name: 'Bitcoin',
    price: 57889,
    prc: -0.3,
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    priceNotifications: []
  },
  {
    name: 'Cardano',
    price: 1.23,
    prc: 0.67,
    image: "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
    priceNotifications: []
  },
  {
    name: 'Polkadot',
    price: 32.43,
    prc: 0.67,
    image: "https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",
    priceNotifications: []
  },
  {
    name: 'Etherum',
    price: 1980,
    prc: 0.67,
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    priceNotifications: []
  },
]




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Favourites = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [loading, setLoading]= useState(false);
  const [chip, setChip] = useState('');
  const [postValues, setPostValues] = useState({
    keywords: [],
});

  const[coins, setCoins] = useState(MOCK_COINS)



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


 const handleChipDelete = (chipToDelete, name) => () => {
  const newKeywords = postValues.keywords.filter((keyword) => {
      return keyword.key !== chipToDelete.key;
  });
  setPostValues({ ...postValues, keywords: newKeywords });
};


const onChipKeydown = (event, name) => {

  if (event.key === 'Enter' || event.key === 'Tab') {
      const nextKey = postValues.keywords.length > 0 ?
          postValues.keywords[postValues.keywords.length - 1].key + 1
          : 1;

      const newKeywordsList = [...postValues.keywords, { label: "$ " + event.target.value, key: "$ " + nextKey}];
      setPostValues({ ...postValues, keywords: newKeywordsList });
      const elementToAdd = { label: "$ " + event.target.value, key: "$ " + nextKey}
      
      const newListCoins = coins.map(el => {
        if (el.name === name) {
          return {...el, priceNotifications: [...el.priceNotifications, elementToAdd] }
        } 
        return el;
      })

      setCoins(newListCoins);
      

      setChip("");
  }
};

const handleChipChange = (event, name) => {
  event.target.value[event.target.value.length - 1] === ' ' ?
            setChip(event.target.value.slice(0, -1)) :
            setChip(event.target.value);
};




  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab style={{color: '#008080'}} icon={<AddCircleIcon />} />
         {coins && coins.map((coin, i)=>{
           return (
             <Tab key={i} label={coin.name} {...a11yProps(0)} />
           )
         })}
        </Tabs>
      </AppBar>
      <TabPanel key={0} value={value} index={0}>
         <CoinSelect />
      </TabPanel>
        {coins.map((coin, i)=>{
             return (

      <TabPanel key={i+1} value={value} index={i+1}>
      {loading ? 
          <div style={{display: 'flex',justifyContent: 'center', alignContent:'center', padding: '4rem'}}><CircularProgress style={{color: '#008080'}} disableShrink /></div>
          :
          <FavouriteTab style={{
            color:
              coin.prc > 0 ? "green" : "red", marginRight:'10px', fontSize: '12px',
          }} 
          coin24h={coin.prc > 0 ? `+${coin.prc.toFixed(2)}%   ` : `${coin.prc.toFixed(2)}%   `} 
          coinPrice={((coin.price * 100) / 100).toLocaleString() + ' $'}
          coinName={coin.name} 
          coinImage={coin.image}
          chip={chip}
          onChipChange={(e)=>handleChipChange(e, coin.name)}
          onKeyDown={(e)=>onChipKeydown(e, coin.name)}
          handleChipDelete= {(e) => handleChipDelete(e, coin.name)}
          postValues={coin.priceNotifications} 
          coinIcon={coin.image}
           />
        }</TabPanel>
        )})}
    </div>
  );
}


export default 
  Favourites
    ;