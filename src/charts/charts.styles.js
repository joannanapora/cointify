import { makeStyles, fade } from '@material-ui/core/styles';

export const useChartsStyles = makeStyles((theme) => ({
  row:{
    maxWidth:theme.spacing(4),
  maxHeight:theme.spacing(5)
},  
  root: {
      fontFamily: 'Hammersmith One',
      flexGrow: 1,
      overflow: 'auto',
      padding: theme.spacing(5,4,4,4),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0,0,0,0)
      },
    },
    container: {
      maxHeight: 640,
      height: '100%',
      overflowY: 'auto',
      width: '100%',
      overflowX: 'hidden'
    },

    }));