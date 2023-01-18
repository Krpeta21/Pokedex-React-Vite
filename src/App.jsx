import { Route} from "wouter";
import ListOfPokemons from "./Services/ListOfPokemons";
import PokemonDetailCard from "./Components/Pokemon.Component";
import NotFound from "./Components/NotFound.Component";


export default function App() {
  return (
    <>
      <Route path="/pokemon/:keyword" component={PokemonDetailCard} />
      <Route path="/" component={ListOfPokemons} />
      <Route path="/:rest*" component={NotFound} />
    </>
  )
}
