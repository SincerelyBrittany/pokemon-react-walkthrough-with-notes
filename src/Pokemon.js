import React from 'react';
import {PokemonCard} from './Styles';

export default function Pokemon(props){
  return(
    <PokemonCard>
      <h2> {props.name} </h2>
    </PokemonCard>
  )
}