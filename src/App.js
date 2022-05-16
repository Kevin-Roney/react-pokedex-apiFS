import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');

  async function load() {
    const { data: { results } } = await getPokemon(query);
    setPokemon(results);
  }

  useEffect(() => {
    load();
  }, []); //eslint-disable-line

  async function handleSubmit(e) {
    e.preventDefault;
    load();
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
