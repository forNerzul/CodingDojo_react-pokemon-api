import './App.css';
import FetchPkmnBtn from './components/FetchPkmnBtn';
import ShowPkmns from './components/ShowPkmns';
import { useState } from 'react';

function App() {
  const [pkmns, setPkmns] = useState([]);
  console.log(`Desde app: ${pkmns}`);
  
  return (
    <>
      <FetchPkmnBtn pkmns={pkmns} setPkmns={setPkmns} />
      <ShowPkmns pkmns={pkmns}/>
    </>
  );
}

export default App;
