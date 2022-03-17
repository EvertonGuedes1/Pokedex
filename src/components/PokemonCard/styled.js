import styled from "styled-components"
import { BackGroundColor, CardColor, HeaderColor } from "../../constants/colors"

export const Card = styled.div`
height: 15vw;
width: 12.5vw;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: ${CardColor};
box-shadow: 4px 4px 5px lightgray;
font-family: Verdana, Geneva, Tahoma, sans-serif;
overflow: hidden;
@media(max-width: 400px) {
    width: 90vw;
    flex-direction: row;
    margin: 0 auto;
    align-items: space-around;
  }
img {
    height: 13vh;
    margin-top: 35px;
    transform: scale(1.6);
    :hover {
      transform: scale(2);
    }
    @media(max-width: 400px) {
    height: 90%;
  }
}
h2 {
    font-size: 18px;
    position: relative;
    top: 1.5vh;
    @media(max-width: 400px) {
    font-size: 10px;
  }
}
`

export const ContainerButtons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 108%;
margin-bottom: 10px;
@media(max-width: 400px) {
flex-direction: column;
}
`

export const LeftButton = styled.div`
    width: 50%;
    height: 3.3em;
    cursor: pointer;
    font-size: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2px;
    margin-top: 25px;
    background-color: ${HeaderColor};
    color: ${BackGroundColor};
    font-weight: bold;
    position: relative;
    bottom: 4vh;
    -webkit-transition: ease-out 1s;
    -moz-transition: ease-out 1s;
    transition: ease-out 1s;
    :hover {
    color: ${HeaderColor};
    box-shadow: inset -400px 0 0 0 ${CardColor};
    letter-spacing: 0.6px;
    }
`

export const RightButton = styled.div`
    width: 50%;
    height: 3.3em;
    cursor: pointer;
    font-size: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2px;
    margin-top: 25px;
    background-color: ${HeaderColor};
    color: ${BackGroundColor};
    font-weight: bold;
    position: relative;
    bottom: 4vh;
    -webkit-transition: ease-out 1s;
    -moz-transition: ease-out 1s;
    transition: ease-out 1s;
    :hover {
    color: ${HeaderColor};
    box-shadow: inset 400px 0 0 0 ${CardColor};
    letter-spacing: 1px;
    }
`