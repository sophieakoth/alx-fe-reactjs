import React from 'react'
import {Link} from "react-router-dom"

function Navbar(){
    return(<>
    <nav style={{ padding: "10px", background: "#eee" }}>
    <link to ="/" style={{ margin: "0 10px" }}>Home</link>
    <link to ="/about" style={{ margin: "0 10px" }}>About</link>
    <link to ="/contact" style={{ margin: "0 10px" }}>Contact</link>
    <link to ="/services" style={{ margin: "0 10px" }}>Services</link>
  </nav>
    </>);




}
export default Navbar