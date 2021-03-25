import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Global/Header';
import LandingWeb from './Components/Global/LandingPageWeb';
import { Component } from 'react';


class App extends Component {

  render(){
    return (
      <Router>
        <Header></Header>
        <Route path='/' component={LandingWeb}></Route>
      </Router>
    );
  }

}

export default App;
