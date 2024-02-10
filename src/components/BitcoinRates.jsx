import { useState, useEffect } from "react";
import { useBitcoinPrice } from "../hooks/useBitcoinPrice";
import { useMoodContext } from "../Context/MoodContext";
import Emoji from "./Emoji";

function BitcoinRates() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
  const [currency, setCurrency] = useState(currencies[0]);


  const bitcoinPrice = useBitcoinPrice(currency);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  const { mood } = useMoodContext();

  return (
    <div>
      <h3>Bitcoin Exchange Rate</h3>
      <div>Current Mood: {mood}</div>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        <strong>Current Price: </strong>
        {bitcoinPrice} {currency}
      </div>
      <div>
        <Emoji />
      </div>
    </div>
  );
}

export default BitcoinRates;