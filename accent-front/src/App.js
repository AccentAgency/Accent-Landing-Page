import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Global/Header';
import LandingWeb from './Components/Global/LandingPageWeb';
import { Component } from 'react';
import Loader from './Components/Global/Loader';
import $ from 'jquery';
import FadeIn from 'react-fade-in';
import ReactGA from 'react-ga';


class App extends Component {
  state = { loading: true };

  componentDidMount() {
    ReactGA.initialize('G-G4BMGNDG8C');
    ReactGA.pageview('/');
    setTimeout(
        function() {
            this.setState({ loading: false });
            $("body").fadeIn(5100);
        }
        .bind(this),
        5000
    );
  }


  render(){
    if (this.state.loading) return <Loader />;
    return (
      <Router>
        <FadeIn>
          <Header></Header>
          <Route path='/' component={LandingWeb}></Route>
        </FadeIn>
      </Router>
    );
  }

}

export default App;
