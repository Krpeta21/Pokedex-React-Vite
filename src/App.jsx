import { Route, Switch} from "wouter";
import ListOfPokemons from "./Components/ListOfPokemons";
import PokemonDetailCard from "./Components/Pokemon.Component";
import NotFound from "./Components/NotFound.Component";


export default function App() {
  return (
    <>
    <Switch>
      <Route path="/" component={ListOfPokemons} />
      <Route path="/pokemon/:keyword" component={PokemonDetailCard} />
      <Route path="/:rest*" component={NotFound} />
      </Switch>
    </>
  )
}
