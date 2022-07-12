import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import { DetailsPokemons } from "../components/DetailsPokemon";

const DetailsPage = (props) => {
  const { name } = useParams();

  return (
    <div>
      <h1>Details</h1>
      <div>
        <DetailsPokemons url={`${BASE_URL}${name}`} />
      </div>
    </div>
  );
};

export default DetailsPage;
