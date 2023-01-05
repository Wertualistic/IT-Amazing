import './App.css';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import App2 from './components/App2';

function App() {

  const [isLoading , SetLoading] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      SetLoading(true)
    },2000)
  },[])

  return (
    <>
      {isLoading ? <App2 />  : <Loader />}
    </>
  );
}

export default App;
