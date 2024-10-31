import React from "react"
import Header from './components/header'
import Body from './components/body'
import Footer from "./components/footer"
import './style.css'
import Hosting from "./components/hosting"
import Section4 from "./components/section4"
import SectionFive from "./components/section5"


function App(){
 return(
  <div className="container">
<Header/>
<Body/>
<Hosting/>
<Section4/>
<SectionFive/>
<Footer/>
  </div>
 )
}


export default App;