import React from "react";
import styled from "styled-components";

import Vector from './imgs/Vector.png'




const HeaderStyle = styled.header`

height: 56px;
background-color: var(--background-principal);
margin-top: 0px;
margin-bottom: 20px;
display: flex;
padding: 20px;

`
const TitleHeader= styled.h1`
color: var(--principal-white);



`
const Pokebola = styled.img`
height: 40px;
display: inline-block;
margin: 0px 0px 0px 20px;
color: var(--principal-white);

`
const Tabs = styled.div`
display: flex;
align-items: center;
padding: 0px 24px 0px 0px;


height: 32px;
margin-bottom: 20px;
   

`
const TabsNames = styled.ul`

margin-left: 20px;
display: flex;

`
const TabsOptions = styled.a`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

text-decoration: none;
margin: 10px;

width: 70px;
height: 32px;

font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: var(--principal-white);
border-bottom:2px solid var(--principal-white) ;

&:hover{
    color: var(--selected-color);
    border-bottom: 4px solid var(--selected-color);
}
`


function Header(){
    return(
        <>
        
        <HeaderStyle>
           <TitleHeader>Pokémons</TitleHeader>
           <Pokebola src={Vector}/>
        
        </HeaderStyle>
        <Tabs>
            <TabsNames>
                <TabsOptions href="#">List</TabsOptions>
                <TabsOptions href="#">Pokedex</TabsOptions>
                    
            </TabsNames>
        </Tabs> 
       
        </>
    )
}

export default Header;