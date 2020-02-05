import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import HomePage from './pages/home-page/home-page.component'
import Header from './components/header/header.component'

class App extends React.Component {

  render() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' />
          <Route path='/signin' />
        </Switch>
    </div>
  );
  }
}

export default App;
