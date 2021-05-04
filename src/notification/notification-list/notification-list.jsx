import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import FavouriteTab from "../notification/notification";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CreateNewTab from "../add-notification/autocomplete";
import { connect } from "react-redux";
import "../../index.css";
import Alert from "../../alert/alert";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ height: "100vh" }}
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
  listRoot: {
    flexGrow: 1,
    height: "100%",
    width: "100%",
  },
  TabContainer: {
    backgroundColor: "inherit",
  },
  colorTab: {
    color: "none",
  },
}));

const Favourites = ({}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notificationTabsList, setnotificationTabsList] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState({ name: "", id: "" });
  const [showAlert, setShowAlert] = useState({
    notificationExist: false,
    chooseCurrency: false,
  });

  const handleChange = (_, newValue) => {
    setValue(newValue);

    if (newValue !== 0) {
      const selectedTabName = notificationTabsList[newValue - 1].name;
      const selectedTabId = notificationTabsList[newValue - 1].id;
      setSelectedCoin({ name: selectedTabName, id: selectedTabId });
    }
  };

  const onSelectedValue = (_, value) => {
    setShowAlert(false);
    if (value === null) {
      return;
    }
    setSelectedCoin({ name: value.name, id: value.id });
  };

  const createNotificationTab = async () => {
    if (selectedCoin.name === "" && selectedCoin.id === "") {
      setShowAlert({ ...showAlert, chooseCurrency: true });
      return;
    }

    if (
      notificationTabsList.findIndex(
        (element) => element.id === selectedCoin.id
      ) >= 0
    ) {
      setShowAlert({ ...showAlert, notificationExist: true });
      return;
    }

    await setnotificationTabsList([...notificationTabsList, selectedCoin]);

    setValue(value + notificationTabsList.length + 1);

    setSelectedCoin({ name: "", id: "" });
  };

  const cancelNotification = (coinId) => {
    const listAfterCancelNotification = notificationTabsList.filter((tab) => {
      return tab.id !== coinId;
    });
    setnotificationTabsList(listAfterCancelNotification);
    setValue(value - 1);
  };

  return (
    <div className={classes.listRoot}>
      {showAlert.notificationExist && (
        <Alert
          type="error"
          text="You already have notification of this currency."
        />
      )}
      {showAlert.chooseCurrency && (
        <Alert type="error" text="Please choose currency." />
      )}
      <AppBar
        className={classes.TabContainer}
        position="static"
        color="inherit"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            style={{ border: 0, color: "#008080", position: "inherit" }}
            icon={<AddCircleIcon />}
          />
          {notificationTabsList?.map((coin, i) => {
            return (
              <Tab
                style={{ color: "#008080", position: "inherit" }}
                key={i}
                label={coin.name}
                {...a11yProps(0)}
              />
            );
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
              <FavouriteTab
                cancelNotification={cancelNotification}
                coinId={selectedCoin.id}
                style={{
                  color: coin.price_change_percentage_24h > 0 ? "green" : "red",
                  marginRight: "10px",
                  fontSize: "12px",
                }}
              />
            </TabPanel>
          );
        })}
    </div>
  );
};

export default connect(null, null)(Favourites);
