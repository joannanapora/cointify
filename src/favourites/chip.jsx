import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    chipRoot: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Chips = ({handleChipDelete, postValues, coinIcon }) => {
  const classes = useStyles();

  return (
    <Paper component="ul" className={classes.chipRoot}>
    {postValues && postValues.map((data) => {
        let icon;

        return (
            <li key={data.key}>
                <Chip
                    avatar={<Avatar alt="nf" src={coinIcon} />}
                    icon={icon}
                    label={data.label}
                    onDelete={handleChipDelete(data)}
                    className={classes.chip} />
            </li>
        );
    })}
</Paper>
  );
}

export default Chips;