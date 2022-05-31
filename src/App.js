import "./App.css";
import { useState } from "react";
import Pokedex from "pokedex-promise-v2";

function App() {
  const [data, setData] = useState();

  const options = {
    protocol: "https",
    hostName: "pokeapi.co",
    versionPath: "/api/v2/",
    cacheLimitL: 100 * 1000,
    timeout: 5 * 1000,
  };

  const P = new Pokedex(options);

  P.getGenerationByName("generation-i").then((res) => {
    console.log(res);
  });

  return <div className="App"></div>;
}

export default App;
