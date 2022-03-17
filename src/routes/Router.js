import React from "react"
import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import PokemonListScreen from "../screens/PokemonListScreen/PokemonListScreen"
import PokemonDetailScrenn from "../screens/PokemonDetailScrenn/PokemonDetailScreen"
import PokedexScreen from "../screens/PokedexScreen/PokedexScreen"

const Router = () => {
    return (
        <BrowserRouter>

            <Switch>

                <Route exact path={"/"} component={PokemonListScreen} />

                <Route exact path={"/pokemon/:name"} component={PokemonDetailScrenn} />

                <Route exact path={"/pokedex"} component={PokedexScreen} />

                <Route>
                    <div>
                        <h1>Erro!</h1>
                        <h3>Página não encontrada...</h3>
                    </div>
                </Route>

            </Switch>

        </BrowserRouter>
    )
}

export default Router