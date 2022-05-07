import { getCryptids, getAliens, getShips } from './services/fetch-utils.js';
import CryptidsList from './CryptidsList.js';
import AlienList from './AlienList.js';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [cryptids, setCryptids] = useState([]);
  const [aliens, setAliens] = useState([]);
  const [ships, setShips] = useState([]);

  useEffect(async () => {

    const cryptidResponse = await getCryptids();
    setCryptids(cryptidResponse);

    const alienResponse = await getAliens();
    setAliens(alienResponse);

    const shipResponse = await getShip();
    setShips(shipResponse);
    
  }, []);

  return (
    <div className="App">
      <CryptidsList cryptids={cryptids}/>
      <AlienList aliens={aliens}/>
      <ShipsList ships={ships}/>
    </div>
  );
}

export default App;