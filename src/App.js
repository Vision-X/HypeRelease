import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import ShowAll from "./ShowAll";
import Yeezy from "./Yeezy";
import Jordan from "./Jordan";
import Hero from "./Hero";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import { dataGetter } from './methods/dataGetter';
import { jordanFetch } from './methods/jordanFetch';
import { yeezyFetch } from './methods/yeezyFetch';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getJordanAndYeezyData = async() => {
    let yeezyData = yeezyFetch;
    let jordanData = jordanFetch;
    Promise.all([yeezyData, jordanData]).then(data => {
      let newData = data.map(dataGetter);
      this.setState({ yeezyData: newData[0], jordanData: newData[1] });
    });
  };

  componentDidMount = () => {
    this.getJordanAndYeezyData();
  };

  render() {
      return (
        <Fragment>
          <Header />
          <Hero />
          <section>
            <Route exact path="/"
              render={() => <ShowAll data={this.state} />}
            />
            <Route
              path="/yeezy"
              render={() => <Yeezy data={this.state.yeezyData} />}
            />
            <Route
              path="/jordans"
              render={() => <Jordan data={this.state.jordanData} />}
            />
            <Route
              path="/about"
              render={() => <About />}
            />
            <Route
              path="/contact"
              render={() => <Contact />}
            />
          </section>
        </Fragment>
      );
  }
}

export default App;
