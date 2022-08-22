import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import FoodDetails from './pages/FoodDetails';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DrinkDetails from './pages/DrinkDetails';
import FoodInProgress from './pages/FoodInProgress';
import DrinkInProgress from './pages/DrinkInProgress';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <div>
      <AppProvider>
        <Router>
          <Route exact path="/" component={ Login } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/foods/:id" component={ FoodDetails } />
          <Route exact path="/drinks/:id" component={ DrinkDetails } />
          <Route exact path="/foods/:id/in-progress" component={ FoodInProgress } />
          <Route exact path="/drinks/:id/in-progress" component={ DrinkInProgress } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
