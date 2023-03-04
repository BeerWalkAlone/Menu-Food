import React from 'react'
import Navabar from './components/Nabar'
import Content from './components/Content'
import Card from './components/Card'

import Img from './Images/fodd.png'
export default function App () {
  const data =[
    {id:1, title:'Fresh and Healty Salad', cal:60, time:5, portion:3, img:Img}, 
    {id:2, title:'Delicious Spicy Beef Noodles', cal:50, time:10, portion:2, img:Img}, 
    {id:3, title:'Delicious Spicy Beef Noodles', cal:50, time:10, portion:2, img:Img}, 
    {id:4, title:'Delicious Spicy Beef Noodles', cal:50, time:10, portion:2, img:Img}, 
    {id:5, title:'Delicious Spicy Beef Noodles', cal:50, time:10, portion:2, img:Img}, 
  ]
  return (
    <div style={{padding:'1%'}}>
      <Navabar/>
      <Content/>
      <br/> <br /><br />
      <div style={{display:'flex', justifyContent:'space-around'}}>
      {data.map(row => 
       <Card
       key={row.id}
       title={row.title}
       cal={row.cal}
       time={row.time}
       portion={row.portion}
       img={row.img}
       />
        )}
     </div>
    </div>
  )
}
