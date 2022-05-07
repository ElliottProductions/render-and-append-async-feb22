import getCrypids from './services/fetch-utils.js';
import CryptidsList from './CryptidsList.js';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [cryptids, setCryptids] = useState([]);

  useEffect(async () => {

    const cryptidResponse = await getCrypids();

    setCryptids(cryptidResponse);
    
  }, []);

  return (
    <div className="App">
      <CryptidsList cryptids={cryptids}/>
    </div>
  );
}

export default App;