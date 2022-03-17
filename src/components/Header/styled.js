import styled from "styled-components"
import { HeaderColor, BackGroundColor } from "../../constants/colors"

export const Head = styled.div`
max-width: 100vw;
height: 10vh;
background-image: linear-gradient(to right, #274777, #214167, #183252, #122830);
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: 2px 2px 5px gray;
`
export const Title = styled.div`
color: ${BackGroundColor};
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 35px;
position: absolute;
right: 39.25%;
width: 25%;
text-align: center;
`

export const LeftButtonHeader = styled.button`
background-color: inherit;
margin: 0px 3vw ;
width: 100px;
height: 66%;
border: 0px solid grey;
border-radius: 10px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
color: ${BackGroundColor};
font-size: 14px;
font-weight: bold;
:hover {
letter-spacing: 0.5px;
}
`

export const RightButtonHeader = styled.button`
background-color: inherit;
margin: 0px 3vw ;
font-size: 14px;
width: 100px;
height: 66%;
border: 0px solid grey;
border-radius: 10px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
color: ${BackGroundColor};
font-weight: bold;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
:hover {
letter-spacing: 0.5px;
}
`