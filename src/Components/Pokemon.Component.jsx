import { Link } from "wouter";
import GetPokemon from "../Services/GetPokemon";

export default function PokemonDetailCard({params}) {
    const {keyword} = params
  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-full">
      <div className="w-1/2 h-1/2 bg-zinc-300 p-10 flex flex-col justify-center items-center rounded-xl">
      <img
        src={GetPokemon(keyword)}
        alt="Pokemon"
        className="min-w-[70%] rounded-lg bg-slate-500"
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, provident.</p>
      </div>
      <Link to="/"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-10">Home</button></Link>
    </div>
  );
}
