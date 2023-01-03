import { useEffect, useState } from "react";
import { AddNew } from "./AddNew";
import { Nav } from "./Nav";
import { PokemonList } from "./PokemonList";
import "./styles.css";
import { PokemonType } from "./types";

export default function App() {
  const [isShow, setShow] = useState(false);
  const [pokemons, setPokemons] = useState<any[]>([]);

  const getPokemon = async (name: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return await response.json();
    } catch (error) {}
  };
  const getPokemons = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`
      );
      const json = await response.json();
      const pokemons: any[] = await Promise.all(
        json.results.map((result: PokemonType) => getPokemon(result.name))
      );
      setPokemons(pokemons);
    } catch (error) {}
  };
  useEffect(() => {
    getPokemons();
  }, []);
  console.log(pokemons);
  return (
    <div>
      <Nav setShow={setShow} />
      <div className="App container">
        <PokemonList pokemons={pokemons} setPokemons={setPokemons} />
        <AddNew {...{ isShow, setShow, setPokemons }} />
      </div>
    </div>
  );
}
