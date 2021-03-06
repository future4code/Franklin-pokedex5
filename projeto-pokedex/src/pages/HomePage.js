import React from "react"
import { ListPokemons } from "../components/ListPokemons";
import { BASE_URL } from "../constants/url";
import useRequestData from "../hooks/useRequestData";
import { ScreenContainer } from "./styled";

//productsScreen

const HomePage = ({pokedex,setpokedex}) =>{
    const [data] = useRequestData(`${BASE_URL}`);

    const addToPokedex = (pokemon) =>{
        const newPokedex = [...pokedex]
        newPokedex.push(pokemon)
        setpokedex(newPokedex)
        data.results.splice(pokemon, 1);
        
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
      </ScreenContainer>
      
    );    
    }
    
export default HomePage;