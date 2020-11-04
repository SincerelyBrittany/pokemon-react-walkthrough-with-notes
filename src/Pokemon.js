import React from 'react';
import {PokeCard} from './Styles';

export default function Pokemon(props){
  return(
    <PokeCard>
      <h2> {props.name} </h2>
    </PokeCard>
  )
}