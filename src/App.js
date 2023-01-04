import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Indicators from './components/Indicators';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Indicators />
      <Products />
    </div>
  );
}

export default App;
