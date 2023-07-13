import {Route, Routes} from "react-router-dom"
import About from "./About";
import Home from "./Home";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar.jsx";
function App() {
  return (<> 
    <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Service" element={<Service/>}></Route>
      <Route path="/Portfolio" element={<Portfolio/>}></Route>
    </Routes>
    </> 
  )  
}

export default App;
