import "./App.css";
import Navbar from "./components/Navbar";
import LiveData from "./components/LiveData";
import Reporting from "./components/Reporting";
import Header from "./components/Header";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <LiveData />;
      break;
    case "/Reporting":
      component = <Reporting />;
      break;
  }
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Header />
        {component}
      </div>
    </div>
  );
}

export default App;
