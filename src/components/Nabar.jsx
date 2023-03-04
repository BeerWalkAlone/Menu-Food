import React from 'react'
import Img from '../Images/letter-c-icon-png-8.png'

export default function Nabar() {
  return (
    <div style={{display:'flex', alignItems:"center"}}>
        <img src={Img} width='4%' />
        <h1 style={{paddingLeft:'1%', fontSize:20}}>Cooking</h1>
    </div>
  )
}
