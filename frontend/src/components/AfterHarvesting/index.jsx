import React from "react";
import "./index.css";

export default function AfterHarvesting() {
  const metrics = [
    { label: "Profits", shortTerm: "$4,049.48", longTerm: "$0.00" },
    { label: "Losses", shortTerm: "$16.79M", longTerm: "$0.00" },
    { label: "Net Capital Gains", shortTerm: "-$16.79M", longTerm: "$0.00" },
  ];

  return (
    <div className="after-harvesting">
      <h2>After Harvesting</h2>
      <table className="metrics-table">
        <thead>
          <tr>
            <th></th>
            <th>Short-Term</th>
            <th>Long-Term</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((item, index) => (
            <tr key={index}>
              <td className="label">{item.label}</td>
              <td
                className={`value ${
                  item.shortTerm.includes("-") ? "negative" : ""
                }`}
              >
                {item.shortTerm}
              </td>
              <td
                className={`value ${
                  item.longTerm.includes("-") ? "negative" : ""
                }`}
              >
                {item.longTerm}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="note-section">
        <p className="label">
          Effective Capital Gains:{" "}
          <span className="value total-negative">-$16.79M</span>
        </p>
        <p className="note">
          📉 Your taxable capital gains are reduced by: $16.76M
        </p>
      </div>
    </div>
  );
}
