import logo from "./logo.svg";
import './App.css';
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>JUST TESTING THE FK APP</p>
          <ProductList/>
      </header>
    </div>
  );
}

export default App;
