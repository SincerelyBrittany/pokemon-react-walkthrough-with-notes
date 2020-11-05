import React, {useState, useEffect} from 'react'
import Pokemon from './Pokemon'

export default function AllPokemonContainer(props){
  

  //useState gives us back two things.
  //1. it gives us back a way to get the state, 2. it gives us a way to set the state
  //Below pokemon is a getter, and setPokemon is a function that takes in as an arugment the NEW state
  //useState([]) is pass in the initial value of pokemon to be and in this case it is an empty array
  const [pokemons, setPokemon] = useState([]);

  useEffect(()=>{
    (async function fetchPokemon(){
        try{
          const res = await fetch('https://pokeapi.co/api/v2/pokemon')
          if(!res.ok){
            throw res
          }
          const data = await res.json()
          const initialPokemonList = data.results
          const pokeFullDataList = []
          for (let p of initialPokemonList){
            const pokeRes = await fetch(p.url)
            if(!res.ok){
              throw res
            }
            const pokeResult = await pokeRes.json();
            pokeFullDataList.push(pokeResult);
          }
          // console.log(data)
          // console.log(pokeFullDataList)
           await setPokemon(pokeFullDataList)
        }
        catch(err){
          // alert("an error occurred")
       
        }
      })
      ()
  }, [])
  //useEffect takses in as an argument a function that will run upon every single render of this componenet.
  //is you pass in an empty array as an argument it will only run upon component mounting
  //if you return a function form use efft, the function will run upon unmounting 

 // https://pokeapi.co/api/v2/

  const renderPokeCards = () => {
    console.log("hello")
    return pokemons.map(p => {
       return <Pokemon name={p.name} />
    })
  }
  

  return(
    <div>
    {renderPokeCards()}
    </div>
  )
}