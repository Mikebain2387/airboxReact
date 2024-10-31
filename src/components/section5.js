import React from "react";




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
 }

 {
  id: 'open',
  image: openCart
 }

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







export default SectionFive