import './App.css';
import { useState } from 'react';
const Pokedex = require('pokeapi-js-wrapper');
function App() {
  const customOptions = {
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
    cache: true,
    timeout: 5 * 1000, // 5s
    cacheImages: true,
  };
  const P = new Pokedex.Pokedex(customOptions);

  P.getPokedexByName('kanto').then(function (response) {
    console.log(response);
  });
  return <div className="App"></div>;
}

export default App;

// const [data, setData] = useState();

// const options = {
//   protocol: 'https',
//   hostName: 'pokeapi.co',
//   versionPath: '/api/v2/',
//   cacheLimit: 100 * 10000,
//   timeout: 5 * 1000,
// };

// const P = new Pokedex(options);

// // P.getGenerationByName("generation-i").then((res) => {
// //   console.log(res);
// // });

// P.getPokedexByName('kanto')
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log('There was an ERROR: ', error);
//   });
