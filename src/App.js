import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import ShowAll from './ShowAll';
import Yeezy from './Yeezy';
import Jordan from './Jordan';
import Hero from './Hero';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getData = () => {
    let url = "https://webscraper-to-api.firebaseapp.com/output.json";
    let dataGetter = response => {
      let arr = [];
      for (let key in response) {
        arr.push(response[key]);
      }
      this.setState({ data: arr })
    }
    return fetch(url)
           .then(response => response.json())
           .then(dataGetter)
           .catch()
  }

  getJordanData = () => {
    let url = "https://webscraper-to-api.firebaseapp.com/jordans.json";
    let dataGetter = response => {
      let arr = [];
      for (let key in response) {
        arr.push(response[key]);
      }
      this.setState({ jData: arr });
    }
    return fetch(url)
           .then(response => response.json())
           .then(dataGetter)
           .catch()
  }

  componentDidMount = () => {
    this.getData();
    this.getJordanData();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
          <section>
            <Route exact path="/" render={() => <ShowAll data={this.state} />} />
            <Route path="/yeezy" render={() => <Yeezy data={this.state.data} />} />
            <Route path="/jordans" render={() => <Jordan data={this.state.jData} />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/contact" render={() => <Contact />} />
          </section>
      </Fragment>
    );
  }
}

export default App;
