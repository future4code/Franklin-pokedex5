import React from "react";
import useRequestData from "../hooks/useRequestData";
import {
  PokemonImage,
  CardContainer,
  NamePokemon
} from "./styled";

export function ListPokemons (props) {

  const [pokeId] = useRequestData(props.url)

    return (
      <CardContainer>
        <PokemonImage src={pokeId && pokeId.sprites.front_default} />
        <NamePokemon>{props.name}</NamePokemon> 
      </CardContainer>
    );
  };