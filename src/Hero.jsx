import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <div class="jumbotron">
        <h1 class="display-3">HypeRelease</h1>
        <small>version 0.1</small>
        <p class="lead">Use this to find all the release dates for new Yeezy Adidas shoes</p>
        <hr class="my-4" />
        {/*<p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>*/}
      </div>
    )
  }
}
