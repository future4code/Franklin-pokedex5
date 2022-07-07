import React from "react"
import { useNavigate } from "react-router-dom";
import ErrorPhoto from  '../photo/PikachuTriste1.png'
import {goToHome} from '../router/coordinator'
import { CenterContiner } from "./styled";
 

const ErrorPage = () =>{
    const navigate = useNavigate()

    return(
        <CenterContiner>
            <h1>Error 404</h1>
            <img src={ErrorPhoto} alt="Pikachu triste" />
            <h3>Ops, está página não existe!!</h3>
            <button onClick={() => goToHome(navigate)}>Voltar para inicio</button>
        </CenterContiner>
    )
    
    }
    
export default ErrorPage;