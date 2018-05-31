import React, { Component } from 'react';
import './RecipeInput.css'

class RecipeInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            image:'',
            name:'',
            ingredients:[''],
            instructions: ''
        }
        this.addIngredient = this.addIngredient.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleIng = this.handleIng.bind(this)
    }

    addIngredient(){
        this.setState((prevState, props) => {return {ingredients: [...prevState.ingredients, '']}})
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    handleIng(e){
        const newIng = this.state.ingredients.slice();
        newIng[e.target.id] = e.target.value
        this.setState({ingredients: newIng})
    }
    
    render() {
        return (
        <div className={`wrapper ${this.props.class}`}>
            <div className='RecipeInput'>

                <div id="close" onClick={this.props.handleClose}>x</div>
                
                <form onSubmit={e =>{   
                    e.preventDefault()
                    this.props.handleRecipe(this.state)
                    this.setState({image:'', name:'', ingredients:[''],instructions:''})
                    this.props.handleClose()
                }}>

                    <p>recipe name</p>
                    <input type="text" value={this.state.name} name='name'
                    onChange={this.handleChange}/>

                    <p>ingredients</p>
                    {this.state.ingredients.map((ing,idx)=> 
                        <input type="text" key={idx} id={idx} value={this.state.ingredients[idx]} style={{marginBottom:'10px'}}
                        onChange={this.handleIng}/>
                    )}                       

                    <div id='add' onClick={this.addIngredient}>+</div>

                    <p>instructions</p>
                    <textarea type="text" value={this.state.instructions} name='instructions'
                    onChange={this.handleChange}>
                    </textarea>

                    <p>image link</p>
                    <input type="text" value={this.state.image} name='image' onChange={this.handleChange}/>

                    <input id='submit-btn' type="submit"/>

                </form>
            </div>
        </div>
        );
    }
}
  
export default RecipeInput;