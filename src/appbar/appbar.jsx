import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Charts from "../stats/stats";
import { ReactComponent as Rocket } from "../assets/startup.svg";
import BottomDrawer from "../drawer/login-drawer/bottom-drawer";
import { Switch, Route, withRouter } from "react-router-dom";
import Favourites from "../notification/notification-list/notification-list";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ScrollTop = (props) => {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const BackToTop = (props, { history }) => {
  const useStyles = makeStyles((theme) => ({
    mainContainer: {
      padding: theme.spacing(5, 10, 5, 10),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0, 0, 0, 0),
      },
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        style={{
          backgroundColor: "#008080",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <div className={classes.container}>
            <div style={{ display: "flex" }}>
              <Rocket style={{ height: "2rem" }} />
              <Button
                style={{
                  color: "black",
                  fontFamily: "Fredoka One",
                }}
              >
                Cointify
              </Button>
            </div>
            <BottomDrawer style={{ marginRight: "5rem" }} />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container className={classes.mainContainer}>
        <Box>
          <Switch>
            <Route exact path="/favourite" component={Favourites} />
            <Route exact path="/" component={Charts} />
          </Switch>
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab
          style={{ backgroundColor: "#008080" }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default withRouter(BackToTop);
