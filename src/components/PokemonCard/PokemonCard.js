import React, { useContext } from "react";
import { Card, ContainerButtons, LeftButton, RightButton } from "./styled";
import { useHistory } from "react-router-dom"
import { goToPokemonDetail } from "../../routes/cordinator"
import GlobalStateContext from "../../global/GlobalStateContext";

const PokemonCard = ({ pokemon, isPokedex }) => {
    const history = useHistory()
    const { pokedex, setPokedex, pokemons, setPokemon } = useContext(GlobalStateContext)

    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.substr(1);
    }

    const addToPokedex = () => {
        const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)

        const newPokemonsList = [...pokemons]
        newPokemonsList.splice(pokeIndex, 1)
        const newPokedexList = [...pokedex, pokemon]

        setPokedex(newPokedexList)
        setPokemon(newPokemonsList)
    }

    const removeFromPokedex = () => {
        const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name)

        const newPokedexList = [...pokedex]
        newPokedexList.splice(pokeIndex, 1)
        const newPokemonsList = [...pokemons, pokemon]

        const orderedList = newPokemonsList.sort((a, b) => {
            return a.id - b.id
        })

        setPokedex(newPokedexList)
        setPokemon(orderedList)
    }


    return (
        <Card>
            <img src={pokemon.sprites && pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>{(pokemon.name).capitalize()}</h2>
            <ContainerButtons>
                <LeftButton
                    onClick={isPokedex ? removeFromPokedex : addToPokedex}>
                    {isPokedex ? "Remover da Pokedex" : "Adicionar à Pokedex"}
                </LeftButton>
                <RightButton onClick={() => goToPokemonDetail(history, pokemon.name)}>Detalhes</RightButton>
            </ContainerButtons>
        </Card>
    )
}

export default PokemonCard;