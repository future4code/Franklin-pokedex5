import React from "react";
import useRequestData from "../hooks/useRequestData";
import { PokemonImage, CardContainer, NamePokemon, DumpButton } from "./styled";
import { goToDetails } from "../router/coordinator";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export function Pokemon(props) {
  const navigate = useNavigate();

  const [pokeId] = useRequestData(props.url);

  return (
    <CardContainer>
      <Button variant="outlined" onClick={() => goToDetails(navigate, props.name)}>Detalhes</Button>
      <PokemonImage src={pokeId && pokeId.sprites.front_default} />
      <NamePokemon>{props.name}</NamePokemon>
      <div>
        <DumpButton onClick={props.removePokemon}/>
      </div>
    </CardContainer>
  );
}
