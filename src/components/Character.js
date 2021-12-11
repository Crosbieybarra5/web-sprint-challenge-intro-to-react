import React from 'react'
import styled from 'styled-components'


const StyledStuff = styled.div`
.dat {
    display:flex;
    justify-content: space-around;
    text-align: center;
    align-items:center;
    margin-top:1%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px;
    
    }
`
const StyledH1 = styled.h1`
    display:inline;
    color: yellow;
    background-color: black;

`
const StyledBirth = styled.h2`
    display: inline;
    color: yellow;
    background-color: black;
    padding: 5px;
    
`
const StyledThings = styled.p`
    display: inline;
    color: yellow;
    background-color: black;
    padding: 5px;
`

const data = (props) => { 
const {data} = props 


return  (
    <StyledStuff>
    <div class="name">
        <StyledH1>{data.name}</StyledH1>
     </div>
    <div class="dat"> 
        <StyledBirth>Birth year: {data.birth_year}</StyledBirth>
        <StyledThings>Eyes color: {data.eye_color}</StyledThings>
        <StyledThings>Gender: {data.gender}</StyledThings>
        <StyledThings>Hair Color: {data.hair_color}</StyledThings>
        <StyledThings>Mass: {data.mass}</StyledThings>
        <StyledThings>Skin Color: {data.skin_color}</StyledThings>
    </div>
    </StyledStuff>
       

    
)
}
export default data









