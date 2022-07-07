import React from "react";
import useRequestData from "../hooks/useRequestData";
import {
  ProductImage,
  CardContainer,
  NameText
} from "./styled";

export function ListPokemons (props) {

  const [pokeId] = useRequestData(props.url)

    return (
      <CardContainer>
        <ProductImage src={pokeId && pokeId.sprites.front_default} />
        <NameText>{props.name}</NameText> 
      </CardContainer>
    );
  };