import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Products />
    </div>
  );
}

export default App;
