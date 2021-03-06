import './App.css';
import PriceCard from './components/PriceCard';
import Logo from "./logo/bitcoin.png"

const App = () => {
  return (
    <div className="App">
    <img src={Logo} width={250} height={150} alt="Crypto Logo" />
    <h1 className="title">Live Crypto Price</h1>
    <h5 className="subtitle">Bitcoin To The Moon 🚀🌕</h5>
    <div className="prices-container">
      <PriceCard type = "low" price={100}/>
      <PriceCard type = "high" price={400}/>
      <PriceCard type = "current" price={300}/>
      </div>
  </div>
  );
}

export default App;
