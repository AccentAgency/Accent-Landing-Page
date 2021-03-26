import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Global/Header';
import LandingWeb from './Components/Global/LandingPageWeb';
import { Component } from 'react';
import Loader from './Components/Global/Loader';
import $ from 'jquery';
import FadeIn from 'react-fade-in';

class App extends Component {
  state = { loading: true };

  componentDidMount() {
    setTimeout(
        function() {
            this.setState({ loading: false });
            $("body").fadeIn(8000);
        }
        .bind(this),
        3000
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
