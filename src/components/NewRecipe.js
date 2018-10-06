import React from 'react';
import axios from 'axios';
import styles from '../styles/RecipeForm.module.css'
import { Link } from "react-router-dom";

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
            <textarea name="ingredients" value={ingredients} rows="5" onChange={this.onChange} />
          </div>
          <div>
            <label>Method:</label>
            <textarea name="method" value={method} rows="10" onChange={this.onChange} />
          </div>
          <div>
            <button type="submit">Save</button>
            <Link to={`/`}>cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default NewRecipe