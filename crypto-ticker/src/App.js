import './App.css';
import Logo from "./logo/bitcoin.png"

const App = () => {
  return (
    <div className="App">
    <img src={Logo} width={250} height={150} alt="Crypto Logo" />
    <h1 className="title">Live Crypto Price</h1>
    <h5 className="subtitle">Bitcoin To The Moon 🚀🌕</h5>
  </div>
  );
}

export default App;
