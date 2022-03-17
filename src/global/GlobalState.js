import axios from "axios"
import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemon] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        getPokemmonNames()
    }, [])

    const cleanPokedex = () => {
        getList()
        setPokedex([])
    }

    const getList = () => {
        const newList = []
        pokemonNames.forEach((item) => {
            axios.get(item.url)
                .then((response) => {
                    newList.push(response.data)
                    if (newList.length === 151) {
                        const orderedList = newList.sort((a, b) => {
                            return a.id - b.id
                        })
                        setPokemon(orderedList)
                    }

                })
                .catch((error) => {
                    console.log(`DEU ERRO ::: `, error)
                })

        })
    }

    useEffect(() => {
        getList()
    }, [pokemonNames])

    const getPokemmonNames = () => {
        axios.get(`${BASE_URL}/pokemon?limit=151&offset=0`)
            .then((response) => {
                setPokemonNames(response.data.results)
            })
            .catch((error) => {
                console.log(`DEU ERRO ::: `, error)
            })
    }

    const data = { pokemonNames, setPokemonNames, pokemons, setPokemon, pokedex, setPokedex, cleanPokedex }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState