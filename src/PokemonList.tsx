import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { colors } from "./colors";
import { Pokemon } from "./Pokemon";
import { ItemType } from "./types";

const StyledPokemonList = styled.main`
  flex-wrap: wrap;
  justify-content: center;
`;

interface IPokemonList {
  pokemons: ItemType[];
  setPokemons: Dispatch<SetStateAction<ItemType>>;
}
export function PokemonList({ pokemons, setPokemons }: IPokemonList) {
  return (
    <div>
      <StyledPokemonList className="flex">
        {pokemons.map((el, i) => (
          <Pokemon
            key={el.id}
            el={el}
            color={colors[i]}
            setPokemons={setPokemons}
          />
        ))}
      </StyledPokemonList>
    </div>
  );
}
