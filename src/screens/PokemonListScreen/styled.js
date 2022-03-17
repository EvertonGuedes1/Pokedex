import styled from "styled-components"
import { CardColor } from "../../constants/colors"

export const GridCard = styled.div`
width: 95%;
margin: 0 auto;
margin-top: 15px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
row-gap: 10px;
column-gap: 10px;
scroll-behavior: inherit;
@media(max-width: 400px) {
    display: flex;
    flex-direction: column;
}
`

export const SearchContainer = styled.div`
height: 15vw;
width: 12.5vw;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color: ${CardColor};
box-shadow: 4px 4px 5px lightgray;
font-family: Verdana, Geneva, Tahoma, sans-serif;
overflow: hidden;
input {
    width: 90%;
    height: 18.5%;
    border: 1px solid lightgray;
    border-radius: 5px;
    position: relative;
    bottom: 6vh;
    text-align: center;
    :focus {
        outline: none;
    }
}
select {
    width: 92.75%;
    height: 20%;
    border: 1px solid lightgray;
    border-radius: 5px;
    position: relative;
    bottom: 4vh;
    text-align: center;
    :focus {
        outline: none;
    }
}
`