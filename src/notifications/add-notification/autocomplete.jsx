import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {autoStyles} from './autocomplete.styles';

const CreateNewTab = ({createNotificationTab, onChange}) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const classes = autoStyles();

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
        axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C7d%2C30d`
        )
        .then((respond) => {
            setOptions(respond.data)
              });
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);


  return (
      <div style={{display: 'flex', width:'100%', alignItems:'center', flexDirection: 'column', margin: '10px'}} >
    <Autocomplete
    onChange={(event,value) => onChange(event,value)}
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => `${option.name}  (${option.symbol.toUpperCase()})` }
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
        style={{display: 'flex', width:'100%', justifyContent:'center'}}
          {...params}
          label="Choose Coin"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
      <Button
      onClick={createNotificationTab}
        background="#008080"
        variant="contained"
        size="large"
        classes={{
            root: classes.saveB, 
            label: classes.saveL,
          }}
      >
        CREATE NOTIFICATION
      </Button>
    </div>
  );
}


export default CreateNewTab;