import React from "react"
import { useNavigate } from "react-router-dom";
import { ScreenContainer } from "./styled";
import { goToHome } from "../router/coordinator";
import { Pokemon } from "../components/Pokemon";


const PokedexPage = (props) =>{
    const pokedex = props.pokedex
    const navigate = useNavigate();

    const removePokemon = (id) =>{
    const newPokedex =[...pokedex]
    const indexPokemon = newPokedex.findIndex((pokemonInPokedex)=> {return pokemonInPokedex.id === id})
        newPokedex.splice(indexPokemon,1)
        props.setpokedex(newPokedex)
    }

    return(
        <ScreenContainer>
            {pokedex.map((pokemon)=>{
                return(
                    <Pokemon
                    key={pokemon.url}
                    name={pokemon.name}
                    url={pokemon.url} 
                    removePokemon={()=> removePokemon(pokemon.id)}
                    />
                )
            })}
            pojedex
        <button onClick={()=>goToHome(navigate)}>lista de pokemons</button>
        </ScreenContainer>
    ); 
}

export default PokedexPage;