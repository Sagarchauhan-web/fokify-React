import "./App.scss";
import Header from "./containers/header/header-components";
import Menubar from "./containers/menubar/menubar-component";
import Details from "./containers/details/details-conponent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Menubar />
        <Details />
      </div>
    </div>
  );
}

export default App;
