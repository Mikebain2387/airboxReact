import React from "react"
import bttmLogo from '../images/airboxlogo_bttm.png'
import google from '../images/google-social-media-google-logo-computer-icons-google-plus-removebg-preview.png'
import wifi from '../images/black-n-white-wifi-icon-png-clipart-removebg-preview.png'

import twitter from '../images/twitter-icon-transparent-background-twitter-logo-white-circle-11562925865vpb2qp9wb1-removebg-preview.png'

import facebook from '../images/2b76bd70baf361dbcaf5e88a83986f4c-removebg-preview.png'

function Footer(){
return(
 <div className="section-6 row pt-3 pb-3">
{FootImage}

{socialLinks}


 </div>
)
}


function FootImage(){
 return(
  <div className="col-4 col-lg-3">
            <img
              src={bttmLogo}
              alt=""
              className="img-fluid"
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
  id ={currentItem.id}
  pic= {currentItem.img}
  
  />
  
 }
)

function SocialItem(props){
 
 return (
  <div
            class="section-6-social-icons mt-lg-4 col-lg-2 col-4 d-flex flex-inline justify-content-end"
          >

  <div className="col-lg-3 col-2">
              <img
              id={props.id}
              className="img-fluid"
              src= {props.pic}
              alt=""
              />
            </div>
              </div>
)
}


export default Footer;