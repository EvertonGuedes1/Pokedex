import styled from "styled-components"
import { CardColor, HeaderColor, BackGroundColor } from "../../constants/colors"

export const Main = styled.div`
display: flex;
`

export const LeftBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 20%;
border-right: 1px solid gray;
img {
    width: 99%;
    margin: 0 auto;
    padding-bottom: 0px;
}
`
export const Galery = styled.div`
width: 95%;
overflow: hidden;
border: 1px solid grey;
border-radius: 10px;
`

export const Carrossel = styled.div`
width: 500%;
animation-name: animacao;
animation-duration: 25s;
animation-iteration-count: infinite;
@keyframes animacao {
    0% {margin-left: 0}
    20% {margin-left: 0}
    25% {margin-left: -100%}
    45% {margin-left: -100%}
    50% {margin-left: -200%}
    70% {margin-left: -200%}
    75% {margin-left: -300%}
    95% {margin-left: -300%}
    100% {margin-left: -400%}
}
img {
    width: 19.99%;
}
`

export const CenterBar = styled.div`
width: 60%;
display: flex;
flex-direction: column;
min-height: 90vh;
`

export const RigthBar = styled.div`
width: 20%;
min-height: 90vh;
display: flex;
flex-direction: column;
border-left: 1px solid gray;
`

export const Infos = styled.div`
width: 70%;
padding-left: 10px;
`

export const RigthInfos = styled.div`
width: 90%;
padding-left: 10px;
`

export const Moves = styled.button`
height: 1.1em;
background-color: white;
border: 1px solid white;
border-radius: 5px;
margin-right: 10px;
margin-bottom: 3px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`

export const Order = styled.h2`
background-color: white;
height: 1.25em;
width: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: -15px;
border-radius: 10px;
`