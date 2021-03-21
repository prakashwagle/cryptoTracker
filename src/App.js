import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import PriceCard from './components/PriceCard';
import Logo from "./logo/bitcoin.png"

const App = () => {

  const [ticker, setTicker] = useState({
    low: 0,
    high: 0,
    last: 0,
  });

  useEffect(()=>{
    async function getCryptoPrice(){
      const {data} = await axios.get(
        'https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/btcusdt'
        );
        console.log("Hi",data.ticker);
      setTicker(data.ticker);
    }
    getCryptoPrice()
    const interval = setInterval(()=> getCryptoPrice(),10000);
      return ()=>{
        clearInterval(interval);
      };
    
  },[]);

  return (
    <div className="App">
    <img src={Logo} width={250} height={150} alt="Crypto Logo" />
    <h1 className="title">Live Crypto Price</h1>
    <h5 className="subtitle">Bitcoin To The Moon 🚀🌕</h5>
    <div className="prices-container">
      <PriceCard type = "low" price={ticker.low}/>
      <PriceCard type = "high" price={ticker.high}/>
      <PriceCard type = "current" price={ticker.last}/>
      </div>
      <p>
        Bitcoin price updated every 10 seconds seconds from{' '}
        <a href="https://wazirx.com/">WazirX API</a>
      </p>
      <p>
        Follow me on twitter: {' '}
        <a href="https://twitter.com/prakashwagle89">@prakashwagle89</a>
      </p>
  </div>
  );
}

export default App;
