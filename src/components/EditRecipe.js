import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

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
    const recipe = (await axios.get(`${ process.env.REACT_APP_API_HOST }/recipes/${params.recipeId}`)).data
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
    axios.put(`${process.env.REACT_APP_API_HOST}/recipes/${this.state.recipe.id}`, 
      { name, description, ingredients, method }
    ).then((result) => {
        this.props.history.push('/')
      })
  }

  render() {
    const { name, description, ingredients, method } = this.state.recipe
    return(
      <div>
        <h1>Edit Recipe</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" name="name" value={name} onChange={this.onChange} />
          </label>
          <label>
            Description:
          <input type="text" name="description" value={description} onChange={this.onChange} />
          </label>
          <label>
            Ingredients:
          <textarea name="ingredients" value={ingredients} onChange={this.onChange} />
          </label>
          <label>
            Method:
          <textarea name="method" value={method} onChange={this.onChange} />
          </label>
          <Link to={`/recipes/show/${this.state.recipe.id}`}>cancel</Link>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default EditRecipe