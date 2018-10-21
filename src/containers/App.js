import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Auth from "../utils/Auth.js";

import PrivateRoute from './PrivateRoute'
import Header from '../components/Header'
import Recipe from '../components/Recipe'
import Recipes from '../components/Recipes'
import NewRecipe from '../components/NewRecipe'
import EditRecipe from '../components/EditRecipe'
import AuthButton from '../components/AuthButton'
import Login from '../components/Login'
import AuthCallback from '../components/AuthCallback'

import styles from '../styles/App.module.css'
import homeStyles from '../styles/Home.module.css'

const auth = new Auth();


const Home = () => (
  <div className={homeStyles.Home}>
    <AuthButton auth={auth}/>
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
      <div className={styles.sidebar} />
      <div className={styles.content}>
        <Route exact={true} path="/" component={Home} />
        <Route exact path="/recipes/new" 
          render={props => <NewRecipe auth={auth} {...props} />} 
        />
        <Route path="/recipes/show/:recipeId" component={Recipe} />
        <PrivateRoute
          path="/recipes/edit/:recipeId"
          component={EditRecipe}
          auth={auth}
        />
        <Route 
          path="/callback" 
          render={props => <AuthCallback auth={auth} {...props} />}
        />
        <Route 
          path="/login" 
          render={props => <Login auth={auth} {...props} />}
        />
      </div>
    </div>
  </Router>
);

export default App;