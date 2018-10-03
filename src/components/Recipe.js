import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = { recipe: {}, loading: true }
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const recipe = (await axios.get(`${process.env.REACT_APP_API_HOST}/recipes/${params.recipeId}`)).data
    this.setState({ recipe: recipe, loading: false })
  }

  render() {
    const { recipe, loading } = this.state

    if(loading === true) {
      return(
        <div>
          loading....
        </div>
      )
    }else{
      return (
        <article>
          <h2>{recipe.name}</h2>
          <h3>Ingredients</h3>
          <ul>
            {
            recipe.ingredients.split('\n').map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))
          }
        </ul>
          <h3>Method</h3>
          <p>{recipe.method}</p>
          <Link to={`/`}>All recipes</Link>
          <Link to={`/recipes/edit/${recipe.id}`}>Edit recipe</Link>
        </article>
      )
    }
  }
}

export default Recipe