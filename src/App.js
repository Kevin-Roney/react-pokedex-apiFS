import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
