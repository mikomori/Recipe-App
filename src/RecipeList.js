import React, { Component } from 'react';
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component {
    constructor(props){
        super(props)
        this.state = {
            image:'',
            caption:'',
            display:''
        }
        this.closeDisplay = this.closeDisplay.bind(this)
    }

    view(id){
        this.setState({image:this.props.recipes[id].image, caption:this.props.recipes[id].name, display:'show'})
    }
    closeDisplay(){
        this.setState({display:''})
    }

    render() {
        return (
        <div className="RecipeList">

            <div className={`view ${this.state.display}`}>
                <div className="close-display" onClick={this.closeDisplay}>x</div>
                <img src={this.state.image} alt=''/>
                <p className="caption">{this.state.caption}</p>
            </div>

            {this.props.recipes.map((recipe,idx)=> <Recipe key={idx} id={idx} {...recipe} view={this.view.bind(this, idx)} handleDel={this.props.delete}/>)}
        
        </div>
        );
    }
}
  
export default RecipeList;