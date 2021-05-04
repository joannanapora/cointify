import { makeStyles } from "@material-ui/core/styles";

export const favTabStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    maxWidth: theme.spacing(8),
    maxHeight: theme.spacing(8),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(3),
    maxWidth: theme.spacing(20),
  },
  rootInput: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: 'center',
    padding: 0
  },
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  chipRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    backgroundColor: 'inherit',
    boxShadow: 'none'
  },
  saveB: {
    background: "#008080",
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  saveL: {
    textTransform: 'capitalize',
  },
}));