import React from "react";
import "./styles.css";
import PokeTeamContainer from './PokeTeamContainer';
import AllPokemonContainer from './AllPokemonContainer'

export default function App() {
  return (
    <div className="App">
      <PokeTeamContainer />
      <AllPokemonContainer />
    </div>
  );
}
