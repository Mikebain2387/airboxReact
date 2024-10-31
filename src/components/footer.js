import React from "react"
import bttmLogo from '../images/airboxlogo_bttm.png'
import google from '../images/google-social-media-google-logo-computer-icons-google-plus-removebg-preview.png'
import wifi from '../images/black-n-white-wifi-icon-png-clipart-removebg-preview.png'

import twitter from '../images/twitter-icon-transparent-background-twitter-logo-white-circle-11562925865vpb2qp9wb1-removebg-preview.png'

import facebook from '../images/2b76bd70baf361dbcaf5e88a83986f4c-removebg-preview.png'

function Footer(){
return(
 <div className="section-6 row pt-3 pb-3 ">
<FootImage/>
<div className="col-7"></div>
<div
            class="section-6-social-icons mt-lg-4 col-lg-3 col-4 d-flex flex-inline justify-content-end"
          >
{socialLinks}

</div>
 </div>
)
}


function FootImage(){
 return(
  <div className="col-4 col-lg-3">
            <img
              className="img-fluid"
              src={bttmLogo}
              alt=""
            />
          </div>
          
 )
}

const icons = [
 {
  id:'google',
  img: google
 },

 {
  id:'wifi',
  img: wifi
 },

 {
  id: 'twitter',
  img: twitter
 },

 {
  id: 'facebook',
  img: facebook
 }
]


const socialLinks = icons.map(
 (currentItem) => {
  return <SocialItem 
  iconId ={currentItem.id}
  pic= {currentItem.img}
  
  />
  
 }
)

function SocialItem(props){
 
 return (
 
            <div class="col-lg-3 col-2 icon_div">


              <img
              id={props.iconId}
              
              src= {props.pic}
              alt=""
              />
   </div>

)
}


export default Footer;