import React from "react";
import word from '../images/wordpress.png'
import magento from '../images/magento.png'
import openCart from '../images/opencart.png'
import joomla from '../images/joomla.png'



function SectionFive(){
 return(
  <div class="row section-5 pt-2 pb-2 pt-lg-4 pb-lg-4">
       
       {SectFiveInfo}

  </div>
 )
}


const imageData = [
 {
  id: 'word',
  image: word
 },

 {
  id: 'magento',
  image: magento
 },

 {
  id: 'open',
  image: openCart
 },

 {
  id: 'joomla',
  image: joomla
 }
]

const SectFiveInfo = imageData.map(
 (currentItem) => {
  return <SectFiveItem 
  id ={currentItem.id}
  pic= {currentItem.image}
 
  />
  
 }
)

function SectFiveItem(props){
 return(
  <div class="col-3 mt-lg-1">
            <img id={props.id} className="img-fluid" src={props.pic} alt="" />
          </div>
 )
}







export default SectionFive