import React from "react"
import { ListPokemons } from "../components/ListPokemons";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../router/coordinator";
import { BASE_URL } from "../constants/url";
import useRequestData from "../hooks/useRequestData";
import { ScreenContainer } from "./styled";

//productsScreen

const HomePage = () =>{
    const navigate =useNavigate();
    const [data] = useRequestData(`${BASE_URL}`);

    return(
        <ScreenContainer>
            {data && data.results.map((pokemon) => {return(<ListPokemons
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
                />)
            })}
            <button onClick={() => goToDetails(navigate)}>Detalhes</button>
      </ScreenContainer>
    );    
    }
    
export default HomePage;