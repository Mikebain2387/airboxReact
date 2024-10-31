import React from "react"
import gears from '../images/gears-removebg-preview (1).png'
import domain from '../images/domain-removebg-preview.png'
import cloud from '../images/cloud-removebg-preview.png'
import phone from '../images/phone-removebg-preview.png'

function Body(){
 return(
  <div className="sect-2  text-center pt-4 row ">
   {boxesInfo}
  </div>
 )
}

const boxData = [
 {
  id: "gears",
  image: gears,
  title:"Control",
  subtitle: "Panel",
  info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque." 
 },
 {
  id: "domain",
  image: domain,
  title: "Multi-Domain",
  subtitle: "Hosting",
  info:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque."
 },
 {
  id: "cloud",
  image: cloud,
  title: "FTP",
  subtitle: "Service",
  info:  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque."
 },
 {
  id: "phone",
  image: phone,
  title: "Direct",
  subtitle: "Support",
  info:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque."
 }
]

const boxesInfo = boxData.map(
 (currentItem) => {
  return <BoxItem 
  id ={currentItem.id}
  pic= {currentItem.image}
  main ={currentItem.title}
  sub = {currentItem.subtitle}
  text = {currentItem.info}
  /> 
 }
)

function BoxItem(props){
 console.log(props)
 return (
  <div class="section2-box col-12 col-lg-3">
            <div className="s2-image">
              
               <img id={props.id} src={props.pic} alt="" /> 
               
            </div>
            <h3>{props.main}</h3>
            <h4>{props.sub}</h4>
            <p>
              {props.text}
            </p>
          </div>
)
}




export default Body;