import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import Header from "../../components/Header/Header"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import { goToPokemonList } from "../../routes/Coordinator"
import { GridCard } from "./styled"

const PokedexScreen = () => {
    const history = useHistory()
    const { pokedex, setPokedex, cleanPokedex } = useContext(GlobalStateContext)

    return (
        <div>
            <Header
                title={"Pokedex"}
                leftButtonFunction={() => goToPokemonList(history)}
                rigthButtonFunction={() => cleanPokedex()}
                showRigthButton={true}

            />
            <GridCard>
                {
                    pokedex && pokedex.map((item) => {
                        return <PokemonCard key={item.name} isPokedex pokemon={item} />
                    })
                }
            </GridCard>
        </div>
    )
}

export default PokedexScreen;