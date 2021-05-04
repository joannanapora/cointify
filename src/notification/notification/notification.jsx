import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { favTabStyles } from "./notification.styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";

const FavouriteTab = ({ cancelNotification, coinId, ...props }) => {
  const classes = favTabStyles();
  const [coinDetails, setCoinDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chip, setChip] = useState("");
  const [notificationList, setNotificationList] = useState([]);

  // FETCH on USE EFFECT
  // SET notificationList BASED on coinID

  const handleChipDelete = (chipToDelete) => () => {
    const newNotificationList = notificationList.filter((keyword) => {
      return keyword !== chipToDelete;
    });
    setNotificationList(newNotificationList);
  };

  const onChipKeydown = (event) => {
    if (
      notificationList.includes("$ " + event.target.value) ||
      event.target.value.length === 0
    ) {
      return;
    }

    if (event.key === "Enter" || event.key === "Tab") {
      const newListOnKeyDown = [...notificationList, "$ " + event.target.value];

      setNotificationList(newListOnKeyDown);

      setChip("");
    }
  };

  const handleChipChange = (event) => {
    if (event.target.value.length >= 11) {
      return;
    }

    setChip(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((respond) => {
        setCoinDetails({
          name: respond.data[0].name,
          chng24h: respond.data[0].price_change_percentage_24h,
          price: respond.data[0].current_price,
          image: respond.data[0].image,
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // STRONA ZE WYJEBAŁO
      });
  }, []);

  return loading || !coinDetails ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress style={{ color: "#008080" }} disableShrink />
    </div>
  ) : (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
            item
            xs
          >
            <Typography gutterBottom variant="h6">
              <img
                className={classes.image}
                alt="coin-image"
                src={coinDetails.image}
              ></img>
            </Typography>
            <Typography
              gutterBottom
              style={{
                fontFamily: "Fredoka One",
                fontSize: "23px",
                alignSelf: "center",
              }}
              variant="h6"
            >
              {coinDetails.name.toUpperCase()}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.section2}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Fredoka One",
            fontSize: "13px",
            marginBottom: "12px",
          }}
        >
          ACTIVE {coinDetails.name.toUpperCase()} NOTIFICATIONS:
        </div>
        {notificationList.length === 0 ? (
          <p
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            0
          </p>
        ) : (
          <Paper component="ul" className={classes.chipRoot}>
            {notificationList.map((element) => {
              return (
                <li key={element}>
                  <Chip
                    avatar={<Avatar alt="coin" src={coinDetails.image} />}
                    label={element}
                    value={chip}
                    onDelete={handleChipDelete(element)}
                    className={classes.chip}
                  />
                </li>
              );
            })}
          </Paper>
        )}
        <div className={classes.rootInput}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel
              style={{ color: "black", fontWeight: "bold" }}
              htmlFor="outlined-adornment-amount"
            >
              Amount
            </InputLabel>
            <OutlinedInput
              style={{ color: "#008080", fontSize: "20px", fontWeight: "bold" }}
              id="outlined-adornment-amount"
              disabled={notificationList.length >= 10}
              startAdornment={
                <InputAdornment
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  position="start"
                >
                  $
                </InputAdornment>
              }
              labelWidth={60}
              value={chip}
              type="number"
              onKeyDown={onChipKeydown}
              onChange={handleChipChange}
            />
          </FormControl>
        </div>
      </div>
      <div className={classes.section3}>
        <Button
          onClick={() => cancelNotification(coinId)}
          style={{ color: "#008080", justifySelf: "center" }}
          variant="contained"
          startIcon={<DeleteIcon />}
        >
          DELETE NOTIFICATIONS
        </Button>
      </div>
    </div>
  );
};

export default FavouriteTab;

// {coinDetails.chng24h > 0
//   ? <Typography style={{color: 'green', fontSize: '13px', marginRight: '10px'}}  variant="h6">{coinDetails.chng24h.toFixed(2)}%  </Typography>
//   : <Typography style={{color: 'red', fontSize: '13px', marginRight: '10px'}} variant="h6">{coinDetails.chng24h.toFixed(2)}%  </Typography>}

{
  /* <Grid item>
<Typography gutterBottom variant="h6">
  {((coinDetails.price * 100) / 100).toLocaleString() + " $"}
</Typography>
</Grid> */
}
