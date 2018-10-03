import React from 'react';
import axios from 'axios';

class NewRecipe extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      ingredients: '',
      method: ''
    }
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log({ target: event.target })
    axios.post(`${process.env.REACT_APP_API_HOST}/recipes`, this.state)
      .then((result) => {
        this.props.history.push('/')
      })
  }

  render() {
    const { name, description, ingredients, method } = this.state
    return(
      <div>
        <h1>New Recipe</h1>
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
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default NewRecipe