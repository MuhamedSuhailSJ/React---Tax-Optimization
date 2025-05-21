import React from "react";
import "./index.css";

export default function PreHarvesting() {
  const metrics = [
    { label: "Profits", shortTerm: "$4,049.48", longTerm: "$0.00" },
    { label: "Losses", shortTerm: "$32,127.03", longTerm: "$0.00" },
    { label: "Net Capital Gains", shortTerm: "-$28,077.55", longTerm: "$0.00" },
  ];

  return (
    <div className="pre-harvesting">
      <h2>Pre Harvesting</h2>
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
        <p className="label">Realised Capital Gain: $3000</p>
      </div>
    </div>
  );
}
