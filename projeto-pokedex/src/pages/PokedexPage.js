import React from "react"
import { ScreenContainer } from "./styled";
import { Pokemon } from "../components/Pokemon";


const PokedexPage = (props) =>{
    const pokedex = props.pokedex;

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
        </ScreenContainer>
    ); 
}

export default PokedexPage;