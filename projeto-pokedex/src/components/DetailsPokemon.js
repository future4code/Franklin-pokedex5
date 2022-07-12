import React from "react";
import useRequestData from "../hooks/useRequestData";
import {
  PokemonImage,
  CardDetails,
  CardContainerDetails,
  Container,
  ContainerImg,
  CardContainerMove,
  CardContainerTypes,
} from "./styled";

export function DetailsPokemons(props) {
  const [pokeId] = useRequestData(props.url);

  return (
    <Container>
      <ContainerImg>
        <CardDetails>
          <PokemonImage src={pokeId && pokeId.sprites.front_default} />
        </CardDetails>
        <CardDetails>
          <PokemonImage src={pokeId && pokeId.sprites.back_default} />
        </CardDetails>
      </ContainerImg>
      <CardContainerDetails>
        <h4>Stats</h4>
        <p>
          {pokeId && pokeId.stats[0].stat.name} :
          {pokeId && pokeId.stats[0].base_stat}
        </p>
        <p>
          {pokeId && pokeId.stats[1].stat.name} :
          {pokeId && pokeId.stats[1].base_stat}
        </p>
        <p>
          {pokeId && pokeId.stats[2].stat.name} :
          {pokeId && pokeId.stats[2].base_stat}
        </p>
        <p>
          {pokeId && pokeId.stats[3].stat.name} :
          {pokeId && pokeId.stats[3].base_stat}
        </p>
        <p>
          {pokeId && pokeId.stats[4].stat.name} :
          {pokeId && pokeId.stats[4].base_stat}
        </p>
        <p>
          {pokeId && pokeId.stats[5].stat.name} :
          {pokeId && pokeId.stats[5].base_stat}
        </p>
      </CardContainerDetails>
      <div>
        <CardContainerMove>
          <h4>Moves</h4>
          <p>{pokeId && pokeId.moves[0].move.name}</p>
          <p>{pokeId && pokeId.moves[1].move.name}</p>
          <p>{pokeId && pokeId.moves[2].move.name}</p>
        </CardContainerMove>
        <CardContainerTypes>
          <h4>Type:</h4>
          <p>{pokeId && pokeId.types[0].type.name}</p>
        </CardContainerTypes>
      </div>
    </Container>
  );
}
