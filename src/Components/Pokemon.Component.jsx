import { Link } from "wouter";
import GetPokemon from "../Services/GetPokemon";

export default function PokemonDetailCard({params}) {
    const {keyword} = params
    const data = GetPokemon(keyword);
    
  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-full">
      <div className="w-1/3 h-1/2 bg-sky-700 p-10 flex flex-col justify-center items-center rounded-xl">
      <img
        src={data.getImage}
        alt="Pokemon"
        className="min-w-[70%] rounded-lg bg-white"
      />
      <p className="text-3xl text-white font-bold">{data.getPokemon.name}</p>
      <p className="text-3xl text-white font-bold">Height: {data.getPokemon.height} </p>
      </div>
      <Link to="/"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-10">Home</button></Link>
    </div>
  );
}
