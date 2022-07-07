import React from "react"
import { useNavigate } from "react-router-dom";
import { ListPokemons } from "../components/ListPokemons";
import { BASE_URL } from "../constants/url";
import useRequestData from "../hooks/useRequestData";
import { goToPokedex } from "../router/coordinator";
import { ScreenContainer } from "./styled";

//productsScreen

const HomePage = ({pokedex,setpokedex}) =>{
    const [data] = useRequestData(`${BASE_URL}`);
    const navigate = useNavigate();

    const addToPokedex = (pokemon) =>{
        console.log(pokemon)
        const newPokedex = [...pokedex]
        newPokedex.push(pokemon)
        console.log(newPokedex)
        setpokedex(newPokedex)
    }

    return(
        <ScreenContainer>
            {data && data.results.map((pokemon) => {return(<ListPokemons
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
                addToPokedex={()=> addToPokedex(pokemon)}
                />)
            })}
            <button onClick={()=>goToPokedex(navigate)}>pokedex</button>
      </ScreenContainer>
    );    
    }
    
export default HomePage;