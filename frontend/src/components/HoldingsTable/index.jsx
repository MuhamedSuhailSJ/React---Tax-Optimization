import React, { useState } from "react";
import "./index.css";

export default function Holdings() {
  const [selected, setSelected] = useState({});

  const data = [
    {
      asset: "Ethereum",
      symbol: "ETH",
      holdings: "20,028.05 ETH",
      avgBuyPrice: "$3,367.87/ETH",
      currentPrice: "$2,531.06",
      shortTerm: "-$16.76M",
      longTerm: "$0.00",
      amountToSell: "20,028.05 ETH",
    },
    {
      asset: "Solana",
      symbol: "SOL",
      holdings: "20,277.78 SOL",
      avgBuyPrice: "$192.15/SOL",
      currentPrice: "$174.37",
      shortTerm: "-$360.41K",
      longTerm: "$0.00",
      amountToSell: "-",
    },
    // Add more assets...
  ];

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
            <th>Holdings</th>
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
              className={selected[asset.symbol] ? "selected-row" : ""}
            >
              <td>
                <input
                  type="checkbox"
                  checked={!!selected[asset.symbol]}
                  onChange={() => toggleSelection(asset.symbol)}
                />
              </td>
              <td>
                <strong>{asset.asset}</strong>{" "}
                <span className="symbol">{asset.symbol}</span>
              </td>
              <td>{asset.holdings}</td>
              <td>{asset.currentPrice}</td>
              <td className="negative">{asset.shortTerm}</td>
              <td>{asset.longTerm}</td>
              <td>{asset.amountToSell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
