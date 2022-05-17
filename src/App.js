import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils.js';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function load() {
    setIsLoading(true);
    const { data: { results } } = await getPokemon(query);
    setIsLoading(false);
    setPokemon(results);
  }

  useEffect(() => {
    load();
  }, []); //eslint-disable-line

  async function handleSubmit(e) {
    e.preventDefault();
    load();
  }
  return (
    <div className={`App isloading-${isLoading}`} >
      <form onSubmit={handleSubmit}>
        <input onChange={e => setQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      {
        pokemon.map((poke, i) =>
          <div key={poke.pokemon + i}>
            <h2>{poke.pokemon}</h2>
            <img src={poke.url_image} />
          </div>)
      }
    </div>
  );
}

export default App;
