import React, { useEffect } from "react";
import PreHarvesting from "./components/PreHarvesting";
import AfterHarvesting from "./components/AfterHarvesting";
import HoldingsTable from "./components/HoldingsTable";
import "./App.css";

const App = () => {
  const [CoinsList, setCoinsList] = React.useState([]);
  const [capitalGain, setCapitalGain] = React.useState({stcg: {
      profits: 0,
      losses: 0,
    },
    ltcg: {
      profits: 0,
      losses: 0,
    },});

  useEffect(() => {
    const fetchdetials = async () => {
      const response1 = await fetch(
        "https://react-tax-optimization.vercel.app/coins"
      );
      const data1 = await response1.json();
      setCoinsList(data1);

      const response2 = await fetch(
        "https://react-tax-optimization.vercel.app/capital-gains"
      );
      const data2 = await response2.json();
      setCapitalGain(data2);
      console.log("capitalGain", data2);
    };
    fetchdetials();
  }, []);

  const filterdCoins = CoinsList;

  const UpdatedCoinsList = CoinsList.map((coin) => {
    return {
      coin: coin.coin,
      coinName: coin.coinName,
      averageBuyPrice: coin.averageBuyPrice,
      logo: coin.logo,
      currentPrice: coin.currentPrice,
      ltcg: { balance: coin.ltcg.balance, gain: coin.ltcg.gain },
      stcg: { balance: coin.stcg.balance, gain: coin.stcg.balance },
      totalHolding: coin.totalHolding,
    };
  });
  console.log("UpdatedCoinsList", UpdatedCoinsList);

  // const UpdatedCapitalGain = {
  //   stcg: {
  //     profits: capitalGain.stcg.profits,
  //     losses: capitalGain.stcg.losses,
  //   },
  //   ltcg: {
  //     profits: capitalGain.ltcg.profits,
  //     losses: capitalGain.ltcg.losses,
  //   },
  // };
  // console.log("UpdatedCapitalGain", UpdatedCapitalGain);

  return (
    <div className="app">
      <div className="dashboard">
        <PreHarvesting filterdCoins={filterdCoins} capitalGain={capitalGain} />
        <AfterHarvesting
          filterdCoins={filterdCoins}
          capitalGain={capitalGain}
        />
      </div>
      <HoldingsTable CoinsList={UpdatedCoinsList} />
    </div>
  );
};

export default App;
