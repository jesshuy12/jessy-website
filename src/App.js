import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import HomePage from './pages/home-page/home-page.component'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' />
          <Route path='/signin' />
        </Switch>
    </div>
  );
}

export default App;
