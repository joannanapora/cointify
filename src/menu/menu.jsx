import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Charts from '../charts/charts'
import { ReactComponent as Rocket } from '../assets/startup.svg';
import BottomDrawer from '../bottom-drawer/bottom-drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const BackToTop = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{ backgroundColor: '#008080' }} >
        <Toolbar>
          <div style={{display:'flex', width: '100%', justifyContent: 'space-between'}}>
            <div style={{display:'flex'}}>
          <Rocket style={{ height: '2.5rem'}} />
          <Typography style={{ color: 'black', paddingLeft: '20px', fontFamily: "Fredoka One" }} variant="h6">CoinTify</Typography></div>
          <BottomDrawer style ={{marginRight: '5rem' }}/>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>
          <Charts />
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab style={{ backgroundColor: '#008080' }} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default BackToTop;