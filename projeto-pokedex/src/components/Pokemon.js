import React from "react";
import useRequestData from "../hooks/useRequestData";
import { PokemonImage, CardContainer, NamePokemon } from "./styled";
import { goToDetails } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

export function Pokemon(props) {
  const navigate = useNavigate();

  const [pokeId] = useRequestData(props.url);

  return (
    <CardContainer>
      <PokemonImage src={pokeId && pokeId.sprites.front_default} />
      <NamePokemon>{props.name}</NamePokemon>
      <div>
        <button onClick={props.removePokemon}>Remover</button>
        <button onClick={() => goToDetails(navigate,props.name)}>Detalhes</button>
      </div>
    </CardContainer>
  );
}
