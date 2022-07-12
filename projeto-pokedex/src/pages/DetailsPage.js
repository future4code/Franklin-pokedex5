import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import useRequestData from "../hooks/useRequestData";
import { goToHome } from "../router/coordinator";
import { DetailsPokemons } from "../components/DetailsPokemon";

const DetailsPage = (props) => {
  const [data] = useRequestData(`${BASE_URL}`);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Details</h1>
      <button onClick={() => goToHome(navigate)}>Voltar para inicio</button>
      <div>
        {data &&
          data.results.map((pokemon) => {
            return (
              <DetailsPokemons
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
                stats={pokemon.stats}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DetailsPage;
