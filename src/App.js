import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/Home';
import QuranHadis from './components/QuranHadis';
import Fiqa from "./components/Fiqa";
import Work from "./components/Work";


function App() {
  return (

      <div className="">
      <BrowserRouter>
       <Routes>
  
           <Route path="/" element={<Home />} />
           <Route path="/quranhadis" element={<QuranHadis />} />
           <Route path="/fiqa" element={<Fiqa />} />
           <Route path="/welfare-work" element={<Work />} />

           
     
       </Routes>
     </BrowserRouter>
      </div>
   
  );
}

export default App;
