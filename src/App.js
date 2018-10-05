import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import Header from './components/Header'
import Recipe from './components/Recipe'
import Recipes from './components/Recipes'
import NewRecipe from './components/NewRecipe'
import EditRecipe from './components/EditRecipe'

import styles from './styles/App.module.css'

const Home = () => (
  <div>
    <Recipes />
    <Link to={`/recipes/new`}>New recipe</Link>
  </div>
);

const App = () => (
  <Router>
    <div className={styles.App}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebar}>
      </div>
      <div className={styles.content}>
        <Route exact={true} path="/" component={Home} />
        <Route exact path="/recipes/new" component={NewRecipe} />
        <Route path="/recipes/show/:recipeId" component={Recipe} />
        <Route path="/recipes/edit/:recipeId" component={EditRecipe} />
      </div>
    </div>
  </Router>
)

export default App;