import React from "react"
import Header from './components/header'
import Body from './components/body'
import Footer from "./components/footer"
import './style.css'
import Hosting from "./components/hosting"


function App(){
 return(
  <div className="container">
<Header/>
<Body/>
<Hosting/>
<Footer/>
  </div>
 )
}


export default App;