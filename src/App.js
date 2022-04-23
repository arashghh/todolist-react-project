import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <ToolBar />
        <Main />
      </Router>
    </div>
  );
}

export default App;
