import { useState,useEffect } from "react";
import Card from "./Components/Card.Component";
import HeaderComponent from "./Components/Header.Component";
export default function App() {
  const [pokemont,setPokemonT] = useState([])
  useEffect(()=>{
    async function fetchData(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const pokemons = await response.json()
    setPokemonT(pokemons.results)    
  }
  fetchData()
  },[])
  return (
    <>  
      <HeaderComponent />
      <div className="flex flex-col items-center justify-center md:grid md:grid-cols-3 md:gap-10">
        {
          pokemont.map((pokemon,index)=>(
            <Card name={pokemon.name} pokemonIndex={index+1} key={index}/> 
          )
          )
        }            
      </div>
      
    </>
  );
}
