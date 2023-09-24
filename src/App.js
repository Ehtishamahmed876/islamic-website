import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/Home';
import QuranHadis from './components/QuranHadis';
import Fiqa from "./components/Fiqa";
import Work from "./components/Work";
import Courses from "./components/Courses";


function App() {
  return (

      <div className="">
      <BrowserRouter>
       <Routes>
  
           <Route path="/" element={<Home />} />
           <Route path="/quranhadis" element={<QuranHadis />} />
           <Route path="/fiqa" element={<Fiqa />} />
           <Route path="/welfare-work" element={<Work />} />
           <Route path="/online-courses" element={<Courses />} />

          
           
     
       </Routes>
     </BrowserRouter>
      </div>
   
  );
}

export default App;
