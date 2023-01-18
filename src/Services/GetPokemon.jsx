import { useState,useEffect } from "react";
export default function GetPokemon(pokemon){
    const[getPokemon,setGetPokemon] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const pokemons = await response.json()
            setGetPokemon(pokemons.sprites.front_default)    
          }
          fetchData()
    },[])
    return(getPokemon)
}