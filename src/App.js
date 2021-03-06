import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import SoftwarePage from './pages/software-page/software-page.component'
import HomePage from './pages/home-page/home-page.component'
import WorkPage from './pages/work-page/work-page.component'
import Header from './components/header/header.component'
import InvsHeader from './components/invs-header/invs-header.component'

class App extends React.Component {

  state = {
    displayHeader: false
  }

  displayHeaderAction = () => {
    this.setState({
      displayHeader: !this.state.displayHeader
    })
  }

  render() {

  return (
    <div className="App">
      <Header />
      { this.state.displayHeader ? <InvsHeader /> : null }
      <div className="menu-button" onClick={this.displayHeaderAction}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
        </div>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/software' component={SoftwarePage}/>
          <Route path='/work' component={WorkPage}/>
          <Route path='/signin' />
        </Switch>
    </div>
  );
  }
}

export default App;
