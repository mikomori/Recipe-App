import React, { Component } from 'react';
import './RecipeInput.css'

class RecipeInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            image:'',
            name:'',
            ingredients:[''],
            instruction: ''
        }
        this.addIngredient = this.addIngredient.bind(this)
    }

    addIngredient(){
        this.setState((prevState, props) => {return {ingredients: [...prevState.ingredients, '']}})
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
                    <input type="text" value={this.state.name} onChange={e =>{
                        this.setState({name:e.target.value}, ()=>console.log(this.state.name))
                    }}/>

                    <p>ingredients</p>
                    {this.state.ingredients.map((ing,idx)=> 
                        <input type="text" key={idx} value={this.state.ingredients[idx]} style={{marginBottom:'10px'}}
                        onChange={e =>{
                            const newIng = this.state.ingredients.slice();
                            newIng[idx] = e.target.value
                            this.setState({ingredients: newIng},()=>console.log(this.state.ingredients))
                        }}/>
                    )}                       
                    <div id='add' onClick={this.addIngredient}>+</div>

                    <p>instructions</p>
                    <textarea type="text" value={this.state.instructions} onChange={e =>{
                        this.setState({instructions:e.target.value}, ()=>console.log(this.state.instructions))
                    }}></textarea>

                    <p>image link</p>
                    <input type="text" value={this.state.image} onChange={e =>this.setState({image: e.target.value})}/>

                    <input id='submit-btn' type="submit"/>

                </form>
            </div>
        </div>
        );
    }
}
  
export default RecipeInput;