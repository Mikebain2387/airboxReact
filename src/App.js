import React from "react"
import Header from './components/header'
import Body from './components/body'
import Footer from "./components/footer"
import './style.css'


function App(){
 return(
  <div className="container">
<Header/>
<Body/>
<Footer/>
  </div>
 )
}


export default App;