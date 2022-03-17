import React from "react";
import { Head, Title, LeftButtonHeader, RightButtonHeader } from "./styled";
import { useHistory } from "react-router-dom"
import { goToPokedex } from "../../routes/cordinator"

const Header = ({ title, leftButtonFunction, showRigthButton, rigthButtonFunction }) => {
    const history = useHistory()

    const leftButtonTitle = () => {
        switch (title) {
            case "infopokes.com":
                return "POKEDEX"
            case "pokedex":
                return "LISTA DE POKEMONS"
            default:
                return "VOLTAR"
        }
    }

    const rightButtonTitle = () => {
        switch (title) {
            case "Pokedex":
                return "LIMPAR POKEDEX"
            default:
                return "POKEDEX"
        }
    }

    return (
        <Head>

            <LeftButtonHeader onClick={leftButtonFunction}>
                {leftButtonTitle()}
            </LeftButtonHeader>

            <Title>{title}</Title>

            {showRigthButton &&
                <RightButtonHeader onClick={rigthButtonFunction}>
                    {rightButtonTitle()}
                </RightButtonHeader>}

        </Head>
    )
}

export default Header;