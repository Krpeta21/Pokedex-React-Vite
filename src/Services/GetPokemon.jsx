import { useState,useEffect } from "react";
import { useLocation } from "wouter";
export default function GetPokemon(pokemon){
    const[getPokemon,setGetPokemon] = useState([])
    const[getImage, setImage] = useState('')
    const[location, setLocation] = useLocation()
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            if(!response.ok) {setLocation('/')}
            const pokemons = await response.json()
            setGetPokemon(pokemons)  
            setImage(pokemons.sprites.front_default)  
          }
          fetchData()
    },[])
    return({getPokemon,getImage})
}