import React from "react";


function Section4(){
 return(
  <div class="section-4 row pt-4 pb-2">

  {servicesComponents}
  </div>
 )
}

const services =[
 {
 title: 'Hosting Services',
 list1:'Shared Hosting',
 list2:'Shared Cloud Hosting',
 list3: 'Reseller Hosting',
 text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
 },

 {
  title: 'Server Solutions',
  list1:'Dedicated Servers',
  list2:'Dynamic Cloud Servers',
  list3: 'Virtual Servers',
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },

  {
   title: 'Email Solutions',
   list1:'Instant Mail',
   list2:'1&1 MailXchange',
   list3: 'Microsoft Exchange',
   text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
   },

   {
    title: 'More Products',
    list1:'ListLocal',
    list2:'Microsoft Sharepoint',
    list3: 'eShops',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    }
]

const servicesComponents = services.map(
 (currentItem) => {
  return <ServiceItem
  title = {currentItem.title}
  listOne = {currentItem.list1}
  listTwo = {currentItem.list2}
  listThree = {currentItem.list3}
  serveText = {currentItem.text}
  />
 }
)


function ServiceItem(props){
return(
 <div className="sec4-box1 col-12 col-lg-3">
            <ul>
              <h3>{props.title}</h3>

              <ul>
                <li>{props.listOne}</li>
                <li>{props.listTwo}</li>
                <li>{props.listThree}</li>
              </ul>
              <p>
              {props.serveText}
              </p>
              <button>Shop Now</button>
            </ul>
          </div>
)
}
export default Section4