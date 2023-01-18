import Navbar from "./Navbar";
import List  from "./pages/List";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import { Route, Routes } from "react-router-dom";
 import { GlobalProvider } from "./context/GlobalState";


function App() {
  return ( 
   
          <GlobalProvider>
            <Navbar/>
            <div className="nav-container">
              <Routes>
                <Route path="/" element={<Browse/>}/>
                <Route path="/list" element={<List/>} />
                <Route path="/browse" element={<Browse/>} />
              </Routes>
            </div>
          </GlobalProvider>
      
 
  )
}

export default App;