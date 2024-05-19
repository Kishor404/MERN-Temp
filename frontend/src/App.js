import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";

import P1 from "./Page1.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="Pages">
          <Routes>
            <Route path="/" element={<P1/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
