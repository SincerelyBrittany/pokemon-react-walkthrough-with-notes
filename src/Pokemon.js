import React from 'react';
import {PokemonCard, PokeBtn} from './Styles';

export default function Pokemon(props){
  return(
    <PokemonCard>
      <h2> {props.name} </h2>
      <img src={props.spriteUrl} />
      <PokeBtn>Choose</PokeBtn>
    </PokemonCard>
  )
}