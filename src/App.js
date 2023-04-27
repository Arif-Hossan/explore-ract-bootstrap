import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import AlertLink from "./components/Alert/Alert";
import Navbar from "./components/Nav/Navbar";
import HelloToast from "./components/HelloToast/HelloToast";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <button>Plan Button</button>
      <Button>React Bootstrap</Button>
      <AlertLink></AlertLink>
      <HelloToast></HelloToast>
    </div>
  );
}

export default App;
