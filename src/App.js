import "./App.css";
import { useState, useEffect } from "react";
const Pokedex = require("pokeapi-js-wrapper");

const customOptions = {
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000, // 5 seconds.
  cacheImages: true,
};

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const P = new Pokedex.Pokedex(customOptions);
    const interval = {
      offset: 0,
      limit: 150,
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
    });
    setData(pokeData);
  }, []);

  return <div className="App"></div>;
}

export default App;
