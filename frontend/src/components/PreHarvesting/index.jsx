import React from "react";
import "./index.css";

const PreHarvesting = ({capitalGain}) =>{
  const shortTerm_Profit = capitalGain.stcg.profits
    ? capitalGain.stcg.profits
    : "$0.00";
  const shortTerm_Losses = capitalGain.stcg.losses
    ? capitalGain.stcg.losses
    : "$0.00";
  const netRealised_shortTerm = shortTerm_Profit + shortTerm_Losses;

  const longTerm_Profit = capitalGain.ltcg.profits
    ? capitalGain.ltcg.profits
    : "$0.00";
  const longTerm_Losses = capitalGain.ltcg.losses
    ? capitalGain.ltcg.losses
    : "$0.00";
  const netRealised_longTerm = longTerm_Profit + longTerm_Losses;

  const metrics = [
    {
      label: "Profits",
      shortTerm: shortTerm_Profit,
      longTerm: longTerm_Profit,
    },
    {
      label: "Losses",
      shortTerm: shortTerm_Losses,
      longTerm: longTerm_Losses,
    },
    {
      label: "Net Capital Gains",
      shortTerm: netRealised_shortTerm,
      longTerm: netRealised_longTerm,
    },
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
              <td className={`value ${item.shortTerm < 0 ? "negative" : ""}`}>
                ${item.shortTerm}
              </td>
              <td className={`value ${item.longTerm < 0 ? "negative" : ""}`}>
                ${item.longTerm}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="note-section">
        <p className="label">
          Realised Capital Gain: ${metrics[2].shortTerm - metrics[2].longTerm}
        </p>
      </div>
    </div>
  );
}

export default PreHarvesting;