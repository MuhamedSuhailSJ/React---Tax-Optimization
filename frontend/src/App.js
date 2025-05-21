import React, { useEffect } from "react";
import PreHarvesting from "./components/PreHarvesting";
import AfterHarvesting from "./components/AfterHarvesting";
import HoldingsTable from "./components/HoldingsTable";
import "./App.css";

const App = () => {
  const [CoinsList, setCoinsList] = React.useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch("http://localhost:3001/coins");
      const data = await response.json();
      setCoinsList(data);
    };
    fetchCoins();
    

  }, []);

  const filterdCoins = CoinsList;
  console.log("filterdCoins", filterdCoins);

  return (
    <div className="app">
      <div className="dashboard">
        <PreHarvesting filterdCoins={filterdCoins} />
        <AfterHarvesting filterdCoins={filterdCoins} />
      </div>
      <HoldingsTable />
    </div>
  );
}

export default App;