import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import DetailsPage from "../pages/DetailsPage";
import PokedexPage from "../pages/PokedexPage";

function Router() {
  const [pokedex, setpokedex] = useState([]);

  return (
      <Routes>
        <Route exact path="/"
          element={<HomePage pokedex={pokedex} setpokedex={setpokedex} />}
        />
        <Route exact path="/details/:name" 
          element={<DetailsPage />} />
        <Route exact path="/pokedex"
          element={<PokedexPage pokedex={pokedex} setpokedex={setpokedex} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
}
export default Router;

