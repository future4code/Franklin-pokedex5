import React from "react"
import { CenterContiner } from "./styled";
 
const ErrorPage = () =>{

    return(
        <CenterContiner>
            <h1>Error 404</h1>
            <img src={'https://i.imgur.com/k9f6XeU.png'} alt="Pikachu triste" />
            <p>Ops, está página não existe!!</p>
        </CenterContiner>
    )
    
    }
    
export default ErrorPage;