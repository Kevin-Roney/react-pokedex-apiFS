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
      <div className='pokemonList'>
        {
          pokemon.map((poke, i) =>
            <div className='pokemon' key={poke.pokemon + i} style={{ backgroundColor: poke.color_1 }}>
              <h2>{poke.pokemon}</h2>
              <img src={poke.url_image} />
              <p>Pokedex Number: {poke.species_id}</p>
              <p>Type: {poke.type_1} & {poke.type_2}</p>
              <p>Height: {poke.height}</p>
              <p>Weight: {poke.weight}</p>
            </div>)
        }
      </div>
    </div>
  );
}

export default App;
