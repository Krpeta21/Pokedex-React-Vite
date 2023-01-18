import { useState,useEffect } from "react";
import HeaderComponent from "../Components/Header.Component";
import Card from "../Components/Card.Component";
import { Link } from "wouter";
export default function ListOfPokemons(){
  const [pokemont,setPokemonT] = useState([])
  useEffect(()=>{
    async function fetchData(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const pokemons = await response.json()
    setPokemonT(pokemons.results)    
  }
  fetchData()
  },[])
    return(
      <div className="flex flex-col justify-center items-center">
      <HeaderComponent/>
        <div className="md:grid md:grid-cols-3 md:gap-20 min-w-[60%] p-10 mt-10">
        {
          pokemont.map((pokemon,index)=>(
            <a href={`/pokemon/${pokemon.name}`} key={index}><Card name={pokemon.name} pokemonIndex={index+1} key={index}/></a>
          )
          )
        }            
      </div>      
      </div>
    )
}