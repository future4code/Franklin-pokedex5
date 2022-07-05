import React from "react"
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import DetailsPage from "../pages/DetailsPage";
import PokedexPage from "../pages/PokedexPage";

function Router() {
    return (
        <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<HomePage/>}/> 
              <Route exact path='/details' element={<DetailsPage/>}/>   
              <Route exact path='/pokedex' element={<PokedexPage/>}/>     
              <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </BrowserRouter>
    );
  }
  export default Router;