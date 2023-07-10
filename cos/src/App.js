import './App.css';
import Home from "./sections/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
   <Routes>
        <>
          <Route exact path="/cos" element={<Home />} />
        
          {/* <Route path="*" element={<Route404/>} /> */}
        </>
      </Routes>
    </div>
  );
}

export default App;
