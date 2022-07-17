import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import { DetailsPokemons } from "../components/DetailsPokemon";
import { TitleDetails } from "../components/styled";

const DetailsPage = (props) => {
  const { name } = useParams();

  return (
    <div>
      <TitleDetails>{name}</TitleDetails>
      <div>
        <DetailsPokemons url={`${BASE_URL}${name}`} />
      </div>
    </div>
  );
};

export default DetailsPage;
