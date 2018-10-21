import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styles from '../styles/Recipes.module.css'

class Recipes extends Component {
  constructor(props) {
    super()
    this.state = { recipes: [] }
  }

  async componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_HOST}/recipes`)
    .then(response => {
      this.setState({ recipes: response.data.Items })
    })
  }

  render() {
    return(
      <div className={styles.Recipes} >
        {
          this.state.recipes.map((recipe, index) => (
            <div key={recipe.id}>
              <h2><Link to={`/recipes/show/${recipe.id}`}>{recipe.name}</Link></h2>
              <p>{recipe.description}</p>

            </div>
          ))
        }
      </div>
    )
  }
}

export default Recipes