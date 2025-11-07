import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from "./Components/Contact.jsx"
import Services from "./Components/Services.jsx"
import Navbar from "./Components/Navbar.jsx"



function App() {
  

  return (
  <BrowserRouter>
  <Navbar/>
  
  <Routes>
  <Route path='/' element = {<Home/>}/>
  <Route path='/about' element = {<About/>}/>
  <Route path='/contact' element = {<Contact/>}/>
  <Route path='/services' element = {<Services/>}/>
  
  
  </Routes>
  
  </BrowserRouter>

     
     
  )
}

export default App
