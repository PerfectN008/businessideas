import React from 'react';
import{ Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/Homepage/Homepage';
import ComprehensionPage from './Pages/Comprehension/ComprehensionPage';
import IntroductionPage from './Pages/IntroductionPage/IntroductionPage';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/'><Redirect to='/login' /></Route>
      <Route exact path='/login' component={HomePage} />
      <Route exact path='/intro' component={IntroductionPage} />
      <Route path='/comprehension/:companyId' component={ComprehensionPage} />
    </Switch>
    </div>
  );
}

export default App;
