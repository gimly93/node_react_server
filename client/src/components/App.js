import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => {
  return ( <h2>Dashboard</h2>)
};

const SurveyNew = () => {
  return (<h2>SurvayNew</h2>)
};

const Landing = () => {
  return (<h2>Landing</h2>)
};

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={Landing}/>
            <Route path="/surveys" exact component={Dashboard}/>
            <Route path="/surveys/new" component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }

};

export default connect(null, actions)(App);