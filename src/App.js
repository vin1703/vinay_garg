// import logo from './logo.svg';

import "./App.css";
import { Box } from '@mui/material'
import React,{Suspense} from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

// import Home from './Pages/Home'
// import Work from './Pages/work'
// import Contact from './Pages/Contact'
// import Navbar from "./Component/Navbar";
// import About from "./Pages/About";

const Home = React.lazy(()=>import("./Pages/Home"));
const Work = React.lazy(()=>import("./Pages/work"));
const Contact = React.lazy(()=>import("./Pages/Contact"));
const Navbar = React.lazy(()=>import("./Component/Navbar"));
const About = React.lazy(()=>import("./Pages/About"));


function App() {
  
//  const mainBox = {
//     display: "flex",
//     flexDirection:"column",
//     justifyContent: "space-between",
//     height : "auto",
// }

  return (
    
    <>
    <Router>
    <Navbar />
    <Box >
    <Suspense fallback={ <div>loading</div>}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path ='/about' element={<About/>} />
      <Route path="/work"  element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      </Suspense>
    </Box>
    </Router>
    </>
  );
}

export default App;
