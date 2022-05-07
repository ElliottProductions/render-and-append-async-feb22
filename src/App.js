import { getCryptids, getAliens, getShips, getUtensils } from './services/fetch-utils.js';
import CryptidsList from './CryptidsList.js';
import AlienList from './AlienList.js';
import ShipsList from './ShipsList.js';
import UtensilsList from './UtensilsList.js';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [cryptids, setCryptids] = useState([]);
  const [aliens, setAliens] = useState([]);
  const [ships, setShips] = useState([]);
  const [utensils, setUtensils] = useState([]);

  useEffect(async () => {

    const cryptidResponse = await getCryptids();
    setCryptids(cryptidResponse);

    const alienResponse = await getAliens();
    setAliens(alienResponse);

    const shipResponse = await getShips();
    setShips(shipResponse);

    const utensilResponse = await getUtensils();
    setUtensils(utensilResponse);
    
  }, []);

  return (
    <div className="App">
      <CryptidsList cryptids={cryptids}/>
      <AlienList aliens={aliens}/>
      <ShipsList ships={ships}/>
      <UtensilsList utensils={utensils}/>
    </div>
  );
}

export default App;