import React from 'react';
import clsx from 'clsx';
import {BDStyles} from './bottom-drawer.styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Login from './login/login';
import {withRouter} from 'react-router-dom';



const BottomDrawer = ({history}) => {
  const classes = BDStyles();
  const [state, setState] = React.useState({

    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    
    setState({ ...state, [anchor]: open });
  };

  const redirectToFavourites = () => {
    if (history) {
      history.push('/favourite')
    }
  }

  const redirectToCharts = () => {
    if (history) {
      history.push('/')
    }
  }
  
  const list = (anchor) => (
    <div
    style={{ backgroundColor: '#008080', display: 'flex', justifyContent: 'center' }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
     <Login/>
    </div>
  );

  return (
    <div className={classes.container} >
        <React.Fragment key={'bottom'}>
        <Button edge='end' onClick={redirectToCharts}>STATS</Button>
          <Button edge='end' onClick={redirectToFavourites}>notification</Button>
          <Button edge='end' onClick={toggleDrawer('bottom', true)}>login</Button>
          <SwipeableDrawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
          >
              {list('bottom')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}

export default withRouter(BottomDrawer);