import Router from "./router/router";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/Header";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html{
    --principal-white: white;
    --background-principal: #5E5C36;
    --selected-color: #fbca04;

    * { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
background-color: var(--background-principal);
background: linear-gradient(#553B80, #FDBEB7);
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
