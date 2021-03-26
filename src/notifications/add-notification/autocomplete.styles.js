import { makeStyles } from "@material-ui/core/styles";

export const autoStyles = makeStyles((theme) => ({
    saveB: {
        background: "#008080",
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        margin: '20px'
      },
      saveL: {
        textTransform: 'capitalize',
      },
  }));