import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Header from "../../components/Header/Header"
import { BASE_URL } from "../../constants/url"
import { goToPokedex } from "../../routes/Coordinator"
import { Carrossel, CenterBar, Galery, Infos, LeftBar, Main, Moves, Order, RigthBar, RigthInfos } from "./styled"

const PokemonDetailScreen = () => {
    const { name } = useParams()
    const [selectedPokemon, setSelectedPokemon] = useState([])
    const history = useHistory()

    useEffect(() => {
        axios
            .get(`${BASE_URL}/pokemon/${name}`)
            .then((res) => setSelectedPokemon(res.data))
            .catch((err) => console.log(err.response.message));
    }, [])

    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.substr(1);
    }

    console.log(selectedPokemon)
    return (
        <div>
            <Header
                title={selectedPokemon && selectedPokemon.name && (selectedPokemon.name).capitalize()}
                leftButtonFunction={() => history.goBack()}
                rigthButtonFunction={() => goToPokedex(history)}
                showRigthButton={true}
            />
            <Main>
                <LeftBar>

                    <Order># {selectedPokemon && selectedPokemon.order}</Order>
                    <h2>{selectedPokemon && selectedPokemon.name && (selectedPokemon.name).capitalize()}</h2>
                    <Galery>
                        <Carrossel>

                            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default} alt={selectedPokemon && selectedPokemon.name} />
                            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default} alt={selectedPokemon && selectedPokemon.name} />
                            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_shiny} alt={selectedPokemon && selectedPokemon.name} />
                            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_shiny} alt={selectedPokemon && selectedPokemon.name} />
                            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default} alt={selectedPokemon && selectedPokemon.name} />

                        </Carrossel>
                    </Galery>

                    <Infos>
                        <h2>Type:</h2>

                        {
                            selectedPokemon && selectedPokemon.abilities && selectedPokemon.types.map((item) => {
                                return (
                                    <p key={item.type.name}>
                                        {(item.type.name).capitalize()}
                                    </p>
                                )
                            })

                        }
                    </Infos>

                    <Infos>
                        <h2>Stats:</h2>

                        {
                            selectedPokemon && selectedPokemon.abilities && selectedPokemon.stats.map((item) => {
                                return (
                                    <p key={item.stat.name}>
                                        <strong>{(item.stat.name).capitalize()}:  </strong>
                                        {item.base_stat}
                                    </p>
                                )
                            })
                        }
                    </Infos>
                </LeftBar>

                <CenterBar>
                    <Infos>
                        <h2>Abilities:</h2>

                        {selectedPokemon && selectedPokemon.abilities && selectedPokemon.abilities.map((item) => {
                            if (item.is_hidden === true) {
                                return <p key={item.ability.name}><strong>{(item.ability.name).capitalize()} (Hidden Ability)</strong></p>
                            } else {
                                return <p key={item.ability.name}>{(item.ability.name).capitalize()}</p>
                            }
                        })
                        }

                    </Infos>

                </CenterBar>

                <RigthBar>
                    <RigthInfos>
                        <h2>Moves:</h2>
                        {

                            selectedPokemon && selectedPokemon.abilities && selectedPokemon.moves.map((item) => {
                                return (
                                    <Moves key={item.move.name}> {(item.move.name).capitalize()}</Moves>
                                )
                            })

                        }
                    </RigthInfos>
                </RigthBar>
            </Main>

        </div>
    )
}

export default PokemonDetailScreen;