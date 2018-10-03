import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class Recipes extends Component {
  constructor(props) {
    super()
    this.state = { recipes: [] }
  }

  async componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_HOST}/recipes`)
    .then(response => {
      console.table(response.data)
      this.setState({ recipes: response.data })
    })
  }

  render() {
    return(
      <ul>
        {
          this.state.recipes.map((recipe, index) => (
            <li key={recipe.id}>
              <Link to={`/recipes/show/${recipe.id}`}>{recipe.name}</Link>
            </li>
          ))
        }
      </ul >
    )
  }
}

export default Recipes