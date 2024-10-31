import React from "react"
import Header from './components/header'
import Body from './components/body'
import Footer from "./components/footer"
import './style.css'
import Hosting from "./components/hosting"
import Section4 from "./components/section4"


function App(){
 return(
  <div className="container">
<Header/>
<Body/>
<Hosting/>
<Section4/>
<Footer/>
  </div>
 )
}


export default App;