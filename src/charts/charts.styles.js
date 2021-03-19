import { makeStyles, fade } from '@material-ui/core/styles';

export const useChartsStyles = makeStyles((theme) => ({
  
  image:{
    maxWidth:theme.spacing(3),
    maxHeight:theme.spacing(3),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
},  
  root: {
      flexGrow: 1,
      overflow: 'auto',
    },
    cellImageAndName: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start'
    },
    regualCell: {
      padding: theme.spacing(2,0,2,0),
      [theme.breakpoints.down('sm')]: {
        padding: '3px !important',
      },
    }

    }));