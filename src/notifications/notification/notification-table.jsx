import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#2C6975',
    color: theme.palette.common.white,
    fontSize: 11,
    fontFamily: "Fredoka One"
  },
  body: {
    fontSize: '10px',
    maxHeight: theme.spacing(5)
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
      maxHeight: '10px',
      width: '50%',
  },
});

const InnerTable = ({OneH,TwentyFourH, SevenDays,ThirtyDays, Price, MarketCap }) => {
  const classes = useStyles();

  return (
    <TableContainer style={{width: '100%', justifyContent: 'center', display: 'flex'}} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell style={{padding: '12px', lineHeight: 0, border: 'none'}} >Price</StyledTableCell>
            <StyledTableCell style={{padding: '12px', lineHeight: 0, border: 'none'}} align="right">1h</StyledTableCell>
            <StyledTableCell style={{padding: '12px', lineHeight: 0, border: 'none'}} align="right">24h</StyledTableCell>
            <StyledTableCell style={{padding: '12px', lineHeight: 0, border: 'none'}} align="right">7d</StyledTableCell>
            <StyledTableCell style={{padding: '12px', lineHeight: 0, border: 'none'}} align="right">30d</StyledTableCell>
            <StyledTableCell style={{padding: '12px', lineHeight: 0, border: 'none'}} align="right">Market Cap</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell style={{backgroundColor: 'transparent', border: 'none'}} component="th" scope="row">
                {Price}
              </StyledTableCell  >
              <StyledTableCell style={{backgroundColor: 'transparent', border: 'none'}}  align="right">{OneH}</StyledTableCell>
              <StyledTableCell  style={{backgroundColor: 'transparent', border: 'none'}} align="right">{TwentyFourH}</StyledTableCell>
              <StyledTableCell style={{backgroundColor: 'transparent', border: 'none'}} align="right">{SevenDays}</StyledTableCell>
              <StyledTableCell style={{backgroundColor: 'transparent', border: 'none'}} align="right">{ThirtyDays}</StyledTableCell>
              <StyledTableCell style={{backgroundColor: 'transparent', border: 'none'}} align="right">{MarketCap}</StyledTableCell>

            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InnerTable;