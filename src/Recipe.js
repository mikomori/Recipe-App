import React from 'react';
import './Recipe.css'

const Recipe = props =>
    <div className="Recipe">
        
        <div className="info">
            <div className="img-field" onClick={props.view}>
                <img src={props.image} alt=''/>
            </div>
            
            <div className='recipe-content'>
                <h1>{props.name}</h1>
                {/* <div className="line"></div> */}

                <p className='title'>INGREDIENTS</p>
                {props.ingredients.map((ing,idx)=> <p key={idx} style={{margin:'5px 0 0', letterSpacing:'0'}}>{ing}</p>)}

                <p className='title' style={{marginTop:'30px'}}>INSTRUCTIONS</p>
                <p style={{letterSpacing:'0', lineHeight:'20px'}}>{props.instructions}</p>
            </div>
        </div>
        
        <div className='del' onClick={props.handleDel.bind(this,props.id)}>x</div>
    </div>

  
export default Recipe;