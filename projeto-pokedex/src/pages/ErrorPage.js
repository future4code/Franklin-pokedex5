import React from "react"
import { useNavigate } from "react-router-dom";
import ErrorPhoto from  '../photo/PikachuTriste1.png'
import {BackToHome} from '../router/coordinator'

const ErrorPage = () =>{
    const navigate = useNavigate()

    const BackToHome = () => {
        navigate('/')
    }    

    return(
        <div className="divError">
            <h1>Error 404</h1>
            <img src={ErrorPhoto} alt="Pikachu triste" />
            <h3>Ops, está página não existe!!</h3>
            <button onClick={BackToHome}>Voltar para inicio</button>
        </div>
    )
    
    }
    
export default ErrorPage;