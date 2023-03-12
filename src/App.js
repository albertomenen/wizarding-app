import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Houses from "./pages/Houses"
import axios from "axios"


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/houses" element = {<Houses/>}/>
      <Route path = "*" element = {<ErrorPage/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
