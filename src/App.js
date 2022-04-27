import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Nav from "./components/Navigation";
import ContainerLayout from "./components/Container";
import { dataContext } from "./components/api-context";
import Content from "./components/Content";

function App() {
  const [api, setApi] = useState(
    "https://foodbukka.herokuapp.com/api/v1/restaurant"
  );
  const value = {
    api,
    setApi,
  };
  return (
    <div className="App">
      <dataContext.Provider value={value}>
        <ContainerLayout>
          <Header />
          <Nav />
          <Content />
        </ContainerLayout>
      </dataContext.Provider>
    </div>
  );
}

export default App;
