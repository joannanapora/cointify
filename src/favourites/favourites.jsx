import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import FavouriteTab from "./favourite-tab";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
import CreateNewTab from "./autocomplete";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectUserNotification } from "../redux/notification/notification.selectors";
import { createStructuredSelector } from "reselect";

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
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Favourites = ({  }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notificationTabsList, setnotificationTabsList] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState({});


  const handleChange = (_, newValue) => {

    setValue(newValue);

    if (newValue !== 0) {

      const selectedTabName = notificationTabsList[newValue-1].name
      const selectedTabId = notificationTabsList[newValue-1].id
  
      setSelectedCoin({name: selectedTabName, id: selectedTabId})
    }
    
  };


  const onSelectedValue = (_, value) => {
    setSelectedCoin({name: value.name, id: value.id})
  };

  const createNotificationTab = () => {
    setnotificationTabsList([...notificationTabsList, selectedCoin ]);
  };


  const cancelNotification= (coinId) => {
    const listAfterCancelNotification = notificationTabsList.filter((tab)=>{
      return tab.id !== coinId
    });
    setnotificationTabsList(listAfterCancelNotification);
    setValue(value-1)
  }


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
          <Tab style={{ color: "#008080" }} icon={<AddCircleIcon />} />
          {notificationTabsList?.map((coin, i) => {
            return <Tab key={i} label={coin.name} {...a11yProps(0)} />;
          })}
        </Tabs>
      </AppBar>
      <TabPanel key={0} value={value} index={0}>
        <CreateNewTab
          onChange={onSelectedValue}
          createNotificationTab={createNotificationTab}
        />
      </TabPanel>
      {!!notificationTabsList &&
        notificationTabsList.map((coin, i) => {
          return (
            <TabPanel key={i + 1} value={value} index={i + 1}>
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: "4rem",
                  }}
                >
                  <CircularProgress
                    style={{ color: "#008080" }}
                    disableShrink
                  />
                </div>
              ) : (
                <FavouriteTab
                cancelNotification={cancelNotification}
                  coinId = {selectedCoin.id}
                  style={{
                    color:
                      coin.price_change_percentage_24h > 0 ? "green" : "red",
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                />
              )}
            </TabPanel>
          );
        })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  notifications: selectUserNotification,
});

export default connect(mapStateToProps, null)(Favourites);
