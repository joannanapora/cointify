import React, { useEffect, useState } from "react";
import { useChartsStyles } from "./charts.styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

const Charts = () => {
  const classes = useChartsStyles();

  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState("usd");
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((respond) => {
        setAllCoins(respond.data);
      });
  });

  const changeFiat = () => {
    setCurrency(currency === "usd" ? "gbp" : "usd");
  };

  return (
    <div className={classes.root}>
      <TableContainer
        style={{ background: "transparent", padding: 0 }}
        component={Paper}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Coin
              </TableCell>
              <TableCell
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Name{" "}
              </TableCell>
              <TableCell
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                <Button
                  onClick={changeFiat}
                  size="small"
                  aria-label="about"
                  color="inherit"
                >
                  Price USD/GBP
                </Button>
              </TableCell>
              <TableCell
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                % Change 24h
              </TableCell>
              <TableCell
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                OFF/ON
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allCoins.map((coin, i) => (
              <TableRow key={coin.name}>
                <TableCell align="center" component="th" scope="row">
                  <img
                    className={classes.row}
                    alt="coin"
                    src={coin.image}
                  ></img>
                </TableCell>
                <TableCell align="center">{coin.name}</TableCell>
                <TableCell align="center">
                  {currency === "gbp" ? "£" : "$"}{" "}
                  {((coin.current_price * 100) / 100).toLocaleString()}{" "}
                </TableCell>
                <TableCell
                  style={{
                    color:
                      coin.price_change_percentage_24h > 0 ? "green" : "red",
                  }}
                  align="center"
                >
                  {coin.price_change_percentage_24h > 0 ? "+ " : ""}
                  {coin.price_change_percentage_24h.toFixed(3)} %
                </TableCell>
                <TableCell align="center">
                  {tracked ? (
                    <StarIcon fontSize="small" style={{ color: "#FFFF00" }} />
                  ) : (
                    <StarOutlineIcon />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Charts;
