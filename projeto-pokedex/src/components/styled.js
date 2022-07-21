import styled from "styled-components";
import image from '../assets/image.jpg';
import Pokeball from '../assets/Pokeball.png';
import Dump from '../assets/Dump.png';

export const CardContainer = styled.div`
  border: 2px solid black;
  width: 220px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background-image: url(${image}) ;
  background-size: cover;
  border-color: #97bfb4;
  border-radius: 10%;
  padding: 5px;
`;

export const ContainerImg = styled.div`
  width: 200px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const TitleDetails = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
  margin: 30px;

`

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: center;
  font-size: 20px;
`;

export const CardDetails = styled.div`
  border: 2px solid black;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-image: url(${image}) ;
  background-size: contain;
  border-color: #97bfb4;
  border-radius: 10%;
`;

export const CardContainerDetails = styled.div`
  border: 2px solid black;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-image: url(${image}) ;
  background-size: contain;
  border-color: #97bfb4;
  border-radius: 2%;
`;

export const CardContainerMove = styled.div`
  border: 2px solid black;
  width: 300px;
  height: 215px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  background-image: url(${image})  ;
  background-size: contain;
  border-color: #97bfb4;
  border-radius: 2%;
`;

export const CardContainerTypes = styled.div`
  border: 2px solid black;
  width: 300px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  background-image: url(${image})  ;
  background-size: contain;
  border-color: #97bfb4;
  border-radius: 2%;
`;

export const PokemonImage = styled.img`
  width: 80%;
  height: 200px;
`;

export const NamePokemon = styled.h2`
  color: #fbca04;
  text-shadow:  0 0 0.2em blue, 0 0 0.2em blue,
        0 0 0.2em blue ;
`;

export const PokeButton = styled.button`
  background-image: url(${Pokeball});
  background-size: 48px 48px;
  margin:10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid white;
  &:hover{
    border: 3px solid red;
    height: 54px;
    width: 54px;

  }
`
export const DumpButton = styled.button`
  background-image: url(${Dump});
  background-size: 48px 48px;
  margin:10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid white;
  &:hover{
    border: 3px solid red;
    height: 54px;
    width: 54px;
    
  }
`

