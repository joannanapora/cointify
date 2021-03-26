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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 10,
  },
  body: {
    fontSize: 8,
    maxHeight: theme.spacing(3)
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
      maxHeight: '10px'
  },
});

const InnerTable = ({OneH,TwentyFourH, SevenDays,ThirtyDays, Price, MarketCap }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell style={{padding: '12px', lineHeight: 0}} >Price</StyledTableCell>
            <StyledTableCell style={{padding: '12px', lineHeight: 0}} align="right">1h</StyledTableCell>
            <StyledTableCell style={{padding: '12px', lineHeight: 0}} align="right">24h</StyledTableCell>
            <StyledTableCell style={{padding: '12px', lineHeight: 0}} align="right">7d</StyledTableCell>
            <StyledTableCell style={{padding: '12px', lineHeight: 0}} align="right">30d</StyledTableCell>
            <StyledTableCell style={{padding: '12px', lineHeight: 0}} align="right">Market Cap</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {Price}
              </StyledTableCell>
              <StyledTableCell align="right">{OneH}</StyledTableCell>
              <StyledTableCell align="right">{TwentyFourH}</StyledTableCell>
              <StyledTableCell align="right">{SevenDays}</StyledTableCell>
              <StyledTableCell align="right">{ThirtyDays}</StyledTableCell>
              <StyledTableCell align="right">{MarketCap}</StyledTableCell>

            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InnerTable;