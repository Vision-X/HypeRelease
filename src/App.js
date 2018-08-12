import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import ShowAll from "./ShowAll";
import Yeezy from "./Yeezy";
import Jordan from "./Jordan";
import Hero from "./Hero";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    this.getJordanAndYeezyData();
  };

  getJordanAndYeezyData = async () => {
    let yeezyData = fetch (
      "https://webscraper-to-api.firebaseapp.com/output.json"
    ).then(result => {
      return result.json();
    });
    let jordanData = fetch (
      "https://webscraper-to-api.firebaseapp.com/jordans.json"
    ).then(result => {
      return result.json();
    });
    Promise.all([yeezyData, jordanData]).then(data => {
      let newData = data.map(this.dataGetter);
      this.setState({ yeezyData: newData[0], jordanData: newData[1] });
    });
  };

  dataGetter = shoe => {
    let arr = [];
    for (let key in shoe) {
      arr.push(shoe[key]);
    }
    return arr;
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
