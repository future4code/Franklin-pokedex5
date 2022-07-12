import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import DetailsPage from "../pages/DetailsPage";
import PokedexPage from "../pages/PokedexPage";

function Router() {
  const [pokedex, setpokedex] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage pokedex={pokedex} setpokedex={setpokedex} />}
        />
        <Route exact path="/details" element={<DetailsPage />} />
        <Route
          exact
          path="/pokedex"
          element={<PokedexPage pokedex={pokedex} setpokedex={setpokedex} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
