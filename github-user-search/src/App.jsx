import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Header from "./components/Header"
import { BrowserRouter,Routes,Route } from "react-router-dom"



function App() {
  
  

  return (
    <BrowserRouter>
    <>
    
    

    <Routes>

    <Route path="/" element = {<Header/>}/>
    <Route path="/maincontent" element = {<MainContent/>}/>
    <Route path="/footer" element = {<Footer/>}/>
    
    
    </Routes>
    
    </>
    </BrowserRouter>
    
  );
};

export default App
