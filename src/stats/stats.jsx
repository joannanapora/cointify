import React, { useEffect, useState } from "react";
import { useChartsStyles } from "./stats.styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";

import { format } from "date-fns";
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";

const Charts = () => {
  const classes = useChartsStyles();

  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState("usd");
  const [loading, setLoading] = useState(true);
  const preventDefault = (event) => event.preventDefault();

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false`
      )
      .then((respond) => {
        setAllCoins(respond.data);
        setLoading(false);
      });
  }, [currency]);

  const changeFiat = () => {
    setCurrency(currency === "usd" ? "gbp" : "usd");
  };

  function commarize(value) {
    if (value >= 1e3) {
      let units = ["k", "M", "B", "T"];
      let unit = Math.floor((value.toFixed(0).length - 1) / 3) * 3;
      let num = (value / ("1e" + unit)).toFixed(2);
      let unitname = units[Math.floor(unit / 3) - 1];

      return num + unitname;
    }
    return value.toLocaleString();
  }

  return (
    <div className={classes.root}>
      <TableContainer style={{ background: "transparent", padding: 0 }}>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              padding: "4rem",
              height: "100vh",
            }}
          >
            <CircularProgress style={{ color: "#008080" }} disableShrink />
          </div>
        ) : (
          <Table aria-label="simple table">
            <TableHead>
              <TableRow
                style={{
                  fontWeight: "600",
                  padding: "2px",
                  margin: "0",
                  fontSize: "11px",
                  textAlign: "left",
                }}
              >
                <TableCell
                  style={{
                    fontWeight: "600",
                    padding: "2px",
                    margin: "0",
                    fontSize: "11px",
                    textAlign: "left",
                  }}
                >
                  Cryptocurrency
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "600",
                    padding: "2px",
                    margin: "0",
                    fontSize: "11px",
                    textAlign: "left",
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "600",
                    padding: "2px",
                    margin: "0",
                    fontSize: "11px",
                    textAlign: "left",
                  }}
                >
                  24h Chg
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "600",
                    padding: "2px",
                    margin: "0",
                    fontSize: "11px",
                    textAlign: "right",
                  }}
                >
                  Market Cap
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allCoins &&
                allCoins.map((coin, i) => (
                  <TableRow key={coin.name}>
                    <TableCell className={classes.regualCell}>
                      <div className={classes.cellImageAndName}>
                        <img
                          className={classes.image}
                          alt="coin"
                          src={coin.image}
                        ></img>
                        {coin.name.length > 10
                          ? coin.symbol.toUpperCase()
                          : coin.name}
                        <div style={{ color: "grey" }}>
                          ({coin.symbol.toUpperCase()})
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className={classes.regualCell} align="left">
                      {currency === "gbp" ? "£" : "$"}{" "}
                      {((coin.current_price * 100) / 100).toLocaleString()}{" "}
                    </TableCell>
                    <TableCell
                      style={{
                        color:
                          coin.price_change_percentage_24h > 0
                            ? "green"
                            : "red",
                        fontSize: "11px",
                      }}
                      className={classes.regualCell}
                      align="left"
                    >
                      {coin.price_change_percentage_24h > 0
                        ? `+${coin.price_change_percentage_24h.toFixed(2)}`
                        : `${coin.price_change_percentage_24h.toFixed(2)}`}{" "}
                      %
                    </TableCell>
                    <TableCell className={classes.regualCell} align="right">
                      {commarize(coin.market_cap)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </div>
  );
};

export default Charts;
