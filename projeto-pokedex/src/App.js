import Router from "./router/router";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/Header";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html{
    --principal-white: #EDEDED;
    --background-principal: #372323;
    --selected-color: #97BFB4;

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
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
