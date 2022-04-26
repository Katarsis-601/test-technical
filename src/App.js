import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Navigation";
import ContainerLayout from "./components/Container";
import Content from "./components/Content";
function App() {
  return (
    <div className="App">
      <ContainerLayout>
        <Header />
        <Nav />
        <Content />
      </ContainerLayout>
    </div>
  );
}

export default App;
