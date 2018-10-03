import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Recipe from './components/Recipe'
import Recipes from './components/Recipes'
import NewRecipe from './components/NewRecipe'
import EditRecipe from './components/EditRecipe'
import { Link } from "react-router-dom";

const Home = () => (
  <div className="ui container">
    <Recipes />
    <Link to={`/recipes/new`}>New recipe</Link>

  </div>
);

const App = () => (
  <Router>
    <div>
      <Route exact={true} path="/" component={Home} />
      <Route exact path="/recipes/new" component={NewRecipe} />
      <Route path="/recipes/show/:recipeId" component={Recipe} />
      <Route path="/recipes/edit/:recipeId" component={EditRecipe} />
    </div>
  </Router>
)

export default App;