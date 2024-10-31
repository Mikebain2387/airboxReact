import React from "react"

function Hosting(){
 return(

  <div class="sec-3 row text-center">
{hostInfo}

 </div>
 )
}


const HostBoxes = [
 {
  title: 'Mini Hosting',
  price: '$10.99',
  space: '4 GB DISK SPACE',
  bandwidth:  '20 GB BANDWIDTH',
  email:  '100 EMAIL ACCOUNTS',
  languages: 'PHP, ROR, MYSQL'

 },

 {
  title: 'User Hosting',
  price: '$12.99',
  space: '8 GB DISK SPACE',
  bandwidth:  '40 GB BANDWIDTH',
  email:  '100 EMAIL ACCOUNTS',
  languages: 'PHP, ROR, MYSQL'

 },

 {
  title: 'Pro Hosting',
  price: '$16.99',
  space: '10 GB DISK SPACE',
  bandwidth:  '60 GB BANDWIDTH',
  email:  '100 EMAIL ACCOUNTS',
  languages: 'PHP, ROR, MYSQL'

 },

 {
  title: 'Maxi Hosting',
  price: '$20.99',
  space: '20 GB DISK SPACE',
  bandwidth:  '100 GB BANDWIDTH',
  email:  '100 EMAIL ACCOUNTS',
  languages: 'PHP, ROR, MYSQL'

 }
]

const hostInfo = HostBoxes.map(
 (currentItem) => {
  return <HostItem 
  title ={currentItem.title}
  price= {currentItem.price}
  space ={currentItem.space}
  band = {currentItem.bandwidth}
  email = {currentItem.email}
  lang = {currentItem.languages}
  />
  
 }
)

function HostItem(props){
 return(
  <div className="sec3-box1 col-12 col-lg-3">
            <h2 className="sec3-head">{props.title} </h2>
            <h3 className="sec3-price">{props.price}<span>/MO.</span></h3>
            <div className="triangle"></div>

            <div className="block-1">{props.space}</div>
            <div className="block-2">{props.band}</div>
            <div className="block-3">{props.email}</div>
            <div className="block-4">{props.lang}</div>
            <div className="block-5"><button>Sign Up</button></div>
          </div>
 )
}



export default Hosting;