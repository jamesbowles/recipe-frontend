import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import styles from '../styles/RecipeForm.module.css'

class EditRecipe extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        name: '',
        description: '',
        ingredients: '',
        method: ''
      },
      loading: true
    }
  }
  async componentDidMount() {
    const { match: { params } } = this.props;
    const { getIdToken } = this.props.auth;
    const headers = { 'Authorization': `Bearer ${getIdToken()}` }
    const recipe = (
      await axios.get(`${process.env.REACT_APP_API_HOST}/recipes/${params.recipeId}`, { headers })
    ).data.Item
    this.setState({ recipe: recipe, loading: false })
  }

  onChange = event => {
    const state = this.state.recipe
    state[event.target.name] = event.target.value 
    this.setState({recipe: state})
  }

  handleSubmit = event => {
    event.preventDefault()
    const { name, description, ingredients, method } = this.state.recipe;
    const { getIdToken } = this.props.auth;
    const headers = { 'Authorization': `Bearer ${getIdToken()}` }
    axios.put(`${process.env.REACT_APP_API_HOST}/recipes/${this.state.recipe.id}`, 
      { name, description, ingredients, method }, { headers: headers }
    ).then((result) => {
        this.props.history.push('/')
      })
  }

  render() {
    const { name, description, ingredients, method } = this.state.recipe
    return(
      <div className={styles.RecipeForm}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={this.onChange} />
          </div>
          <div>
            <label>Description:</label>
            <input type="text" name="description" value={description} onChange={this.onChange} />
          </div>
          <div>
            <label>Ingredients:</label>
            <textarea name="ingredients" value={ingredients} rows="10" onChange={this.onChange} />
          </div>
          <div>
            <label>Method:</label>
            <textarea name="method" value={method} rows="10" onChange={this.onChange} />
          </div>
          <div>
            <button type="submit">Save</button>
            <Link to={`/recipes/show/${this.state.recipe.id}`}>cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default EditRecipe