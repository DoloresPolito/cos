import './App.css';
import Home from "./sections/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

   <Routes>
        <>
          <Route path="/" element={<Home />} />
        
          {/* <Route path="*" element={<Route404/>} /> */}
        </>
      </Routes>
    </div>
  );
}

export default App;
