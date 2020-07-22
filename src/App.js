import React from 'react';
import{ Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/Homepage/Homepage';
import ComprehensionPage from './Pages/Comprehension/ComprehensionPage';
import IntroductionPage from './Pages/IntroductionPage/IntroductionPage';
import ComprehensionRules from './Pages/ComprehensionRules/ComprehensionRules';
import QuestionPage from './Pages/QuestionPage/QuestionPage';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/'><Redirect to='/login' /></Route>
      <Route exact path='/login' component={HomePage} />
      <Route exact path='/intro' component={IntroductionPage} />
      <Route exact path='/comprehension/:companyId/:comprehensionId' component={ComprehensionPage} />
      <Route exact path='/comprehension/:companyId/:comprehensionId/questions' component={QuestionPage} />
      <Route exact path='/comprehensionRules/:companyId' component={ComprehensionRules} />
    </Switch>
    </div>
  );
}

export default App;
