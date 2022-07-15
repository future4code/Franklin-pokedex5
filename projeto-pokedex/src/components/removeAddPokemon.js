import React from "react"

export const addToPokedex = (pokemon) =>{
        const newPokedex = [...pokedex]
        newPokedex.push(pokemon)
        setpokedex(newPokedex)
        setbutton(false)
    }

export const removePokemon = (pokemon) =>{
        const newPokedex =[...pokedex]
        const indexPokemon = newPokedex.findIndex((pokemonInPokedex)=> {return pokemonInPokedex.id === pokemon})
            newPokedex.splice(indexPokemon,1)
            props.setpokedex(newPokedex)
            setbutton(true)
        }
