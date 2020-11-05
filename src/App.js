import React, {useState} from "react";
import "./styles.css";
import PokeTeamContainer from './PokeTeamContainer';
import AllPokemonContainer from './AllPokemonContainer'

export default function App() {

  const [choosenPokemon, setChoosenPokemon] = useState([])

  return (
    <div className="App">
      <PokeTeamContainer />
      <AllPokemonContainer />
    </div>
  );
}
