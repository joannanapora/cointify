import React from 'react';
import clsx from 'clsx';
import {BDStyles} from './bottom-drawer.styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Login from './login/login';


const BottomDrawer = () => {
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

  const list = (anchor) => (
    <div
    style={{ backgroundColor: '#008080' }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <Login/>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'bottom'}>
          <Button edge='end' onClick={toggleDrawer('bottom', true)}>GET STARTED</Button>
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

export default BottomDrawer;