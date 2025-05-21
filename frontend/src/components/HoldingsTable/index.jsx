import React, { useState } from "react";
import "./index.css";

const Holdings = ({ CoinsList }) => {
  const [selected, setSelected] = useState({});

  const data = CoinsList;

  const toggleSelection = (symbol) => {
    setSelected((prev) => ({ ...prev, [symbol]: !prev[symbol] }));
  };

  return (
    <div className="holdings">
      <h2>Holdings</h2>
      <table>
        <thead>
          <tr className="table-header">
            <th>Select</th>
            <th>Asset</th>
            <th>Holdings<br/><span>Avg Price</span></th>
            <th>Current Price</th>
            <th>Short-Term</th>
            <th>Long-Term</th>
            <th>Amount to Sell</th>
          </tr>
        </thead>
        <tbody>
          {data.map((asset, idx) => (
            <tr
              key={idx}
              className={selected ? "selected-row" : ""}
            >
              <td>
                <input
                  type="checkbox"
                  onChange={() => toggleSelection(asset.symbol)}
                />
              </td>
              <td className="coin-info">
                <div>
                  <img src={asset.logo} alt="" />
                </div>
                <div className="coin-name">
                  <p>{asset.coinName}</p>
                  <p>{asset.coin}</p>
                </div>
              </td>
                  <td>{asset.totalHolding}<br />{asset.averageBuyPrice}</td>
              <td>{asset.currentPrice}</td>
              <td className="negative">
                {asset.stcg.balance + asset.stcg.gain}
              </td>
                <td>$0.00<br/>
                {asset.coin}
                </td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Holdings;
