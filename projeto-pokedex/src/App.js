import Router from "./router/router";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/Header";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html{
    --principal-white: white;
    --background-principal: #553B80;
    --selected-color: #fbca04;

    * { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
background-color: var(--background-principal);

}
`


function App() {
  return (
    <>
    <div>
      <GlobalStyles/>
    </div>
    <div>
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
