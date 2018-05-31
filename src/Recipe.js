import React from 'react';
import './Recipe.css'

const Recipe = props =>
    <div className="Recipe">
        
        <div className="info">
            <div className="img-field" onClick={props.view}>
                <img src={props.image} alt=''/>
            </div>
            
            <h1>{props.name}</h1>
            <div className="line"></div>

            <p>ingredients</p>
            {props.ingredients.map((ing,idx)=> <p key={idx} style={{fontSize:'14px',color:'#565656', margin:'5px 0 0', letterSpacing:'0'}}>{ing}</p>)}

            <p style={{marginTop:'30px'}}>instructions</p>
            <p style={{fontSize:'14px',color:'#565656', letterSpacing:'0', lineHeight:'20px'}}>{props.instructions}</p>
        </div>
        
        <div className='del' onClick={props.handleDel.bind(this,props.id)}>x</div>
    </div>

  
export default Recipe;