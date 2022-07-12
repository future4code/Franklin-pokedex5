import styled from "styled-components";
import background from '../assets/background.png';

export const CardContainer = styled.div`
  border: 2px solid black;
  width: 220px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background-image: url(${background});
  border-color: #97bfb4;
  border-radius: 10%;
`;

export const ContainerImg = styled.div`
  width: 200px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const CardDetails = styled.div`
  border: 2px solid black;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: #97bfb4;
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
  background-color: #97bfb4;
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
  margin: 10px;
  background-color: #97bfb4;
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
  margin: 10px;
  background-color: #97bfb4;
  border-color: #97bfb4;
  border-radius: 2%;
`;

export const PokemonImage = styled.img`
  width: 100%;
  height: 250px;
`;

export const NamePokemon = styled.h2`
  margin: 5px 0;
`;
