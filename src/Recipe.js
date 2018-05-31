import React, { Component } from 'react';
import './Recipe.css'

class Recipe extends Component {

    render() {
        return (
        <div className="Recipe">
            
            <div className="info">
                <div className="img-field" onClick={this.props.view}>
                    <img src={this.props.image} alt=''/>
                </div>
                
                <h1>{this.props.name}</h1>
                <div className="line"></div>

                <p>ingredients</p>
                {this.props.ingredients.map((ing,idx)=> <p key={idx} style={{fontSize:'14px',color:'#565656', margin:'5px 0 0', letterSpacing:'0'}}>{ing}</p>)}
    
                <p style={{marginTop:'30px'}}>instructions</p>
                <p style={{fontSize:'14px',color:'#565656', letterSpacing:'0', lineHeight:'20px'}}>{this.props.instructions}</p>
            </div>
            
            <div className='del' onClick={this.props.handleDel.bind(this,this.props.id)}>x</div>
        </div>
        );
    }
}
  
export default Recipe;