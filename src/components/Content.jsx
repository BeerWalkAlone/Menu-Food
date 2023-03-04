import React from 'react'
import Img from '../Images/images.jpg'
export default function Content() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ width: '40%', fontSize: 30, textAlign: 'center' }}>
                <h1 style={{margin:0}}>Simple And <br/> Tasty Recipes</h1>

            </div>
            <div style={{ width: '40%', textAlign:'center'}}>
            <p style={{margin:0}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugit impedit voluptas, quis rem animi excepturi maiores nesciunt aliquid architecto, hic voluptates quisquam! Architecto ipsam reiciendis eum pariatur qui! Deleniti.</p>
            </div>
                <div style={{display:'flex',alignItems:'center', justifyContent:'center',margin:20}}>
                <img src={Img} alt="" width={'20%'} style={{borderRadius:50}}/>
                    <h6 style={{paddingLeft:10}}>what up bit*h</h6>
                </div>
                  
                
        </div>
    )
}
