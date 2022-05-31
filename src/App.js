import './App.css';
import { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
const Pokedex = require('pokeapi-js-wrapper');

const customOptions = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 5 * 1000, // 5 seconds.
  cacheImages: true,
};

function App() {
  const [data, setData] = useState([]);
  const [pokeState, setPokeState] = useState([]);
  const [openPop, setOpenPop] = useState(false);

  const P = new Pokedex.Pokedex(customOptions);
  useEffect(() => {
    const interval = {
      offset: 0,
      limit: 151,
    };

    const pokeData = [];

    P.getPokemonsList(interval).then(function (response) {
      response.results.map((pokemon, index) =>
        pokeData.push({
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        })
      );
      setData(pokeData);
    });
  }, []);
  console.log(data, 'DATA');

  const pokemonProfile = (name) => {
    setOpenPop(true);
    console.log('CALLING ');
    P.getPokemonByName(name).then((res) => {
      setPokeState([res]);
    });
  };

  return (
    <div className="App">
      {openPop && pokeState && <div>Pokemon Abilities</div>}

      <div className="container">
        <div className="title-container">
          <div className="title">Name</div>

          <div className="title">Picture</div>
        </div>

        <div className="data-container">
          {data.length &&
            data.map((pokemon) => (
              <div className="pokemon-data-container">
                <div
                  className="data"
                  onClick={() => pokemonProfile(pokemon.name)}
                >
                  <button onClick={() => pokemonProfile(pokemon.name)}>
                    {pokemon.name}
                  </button>
                </div>
                <div className="data">
                  <img src={pokemon.image} alt="pokemon"></img>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
