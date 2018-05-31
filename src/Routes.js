import React, { Component } from 'react'
import {
    Switch, Route
   } from 'react-router-dom';
import RecipeInput from './RecipeInput'
import RecipeList from './RecipeList'
import About from './About'

const recipes = [
    {
      name:'avocado egg toast',
      ingredients:['1 avocado', '2 eggs', '1 piece of toast'],
      instructions:
      `Bring eggs to boil for 10 minutes and cut into half. Cut avocado into slices.
      Place eggs and avocado slices on buttered toasts to serve.`,
      image:'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c75e0437e819afdceeb3050a6bcdd71b&auto=format&fit=crop&w=653&q=80'
    },
    {
      name:'cocoa popsicle',
      ingredients:['2 tbsp cocoa powder', '1 cup coconut milk', '4 pitted dates'],
      instructions:
      `Combine ingredients in blender until frothy and very smooth.
      Fill each popsicle mold and add popsicles stick. Place in freezer for 4 hours.`,
      image:'https://images.unsplash.com/photo-1501014882647-fa3cef30d47d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d3ea726242b23c3de2acdb90add17070&auto=format&fit=crop&w=700&q=80'
    },
    {
      name:'creamy fish',
      ingredients:['2 lbs white fish','1 bunch kale','3/4 cup tahini sauce','butter','3 cloves of garlic'],
      instructions:
      `Cook kale with garlic and butter in pan. Add the fish and cook till brown, then add tahini sauce with some salt into pan. Cook for another 5 minutes and serve.`,
      image:'https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=412bda5e6fbc656b7c85247bd0bb3fa1&auto=format&fit=crop&w=700&q=80'
    }
]

class Routes extends Component {
    constructor(props){
    super(props)
    this.state = {
        class: '',
        recipes:recipes
    }
    this.addRecipe = this.addRecipe.bind(this)
    this.delete = this.delete.bind(this)
    }

    addRecipe(recipe){  
        const arr = this.state.recipes.slice()
        arr.push(recipe)
        this.setState({recipes:arr},
        ()=>console.log(this.state.recipes))
    }

    delete(id){
        const arr = this.state.recipes.filter((r,idx) => idx!==id)
        this.setState({recipes:arr})
    }
    
    render(){
        
        return(
        <Switch>
            <Route path='/about' component={About}/>
            <Route path='/' render ={props=>([
                <RecipeList key='list' {...props} recipes={this.state.recipes} delete={this.delete}/>, 
                <RecipeInput key='input' {...props} class={this.props.class} handleClose={this.props.close} handleRecipe={this.addRecipe}/>
            ])}/>  
        </Switch>
        )
    }
}

export default Routes