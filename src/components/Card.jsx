import React from 'react'

export default function Card(props) {
    return (
        <div style={{ backgroundColor: 'red', width: 250, height: 300}}>
        <div style={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            
        }}>
            <img src={props.img} alt="" width={'70%'} style={{marginTop:-70}}/>
            <h4 >{props.title}</h4>
            <p >{props.cal} calories</p>
            </div>
            <hr />
            <div style={{display:'flex', padding:20, paddingTop:30}}>
                <div style={{flex:1}}>
                    <p style={{margin:0}}> Time</p>
                    <p style={{margin:0}}>{props.time}</p>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{flex:1, display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
                    <p style={{margin:0}}>Portion</p>
                    <p style={{margin:0}}>{props.portion}</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
