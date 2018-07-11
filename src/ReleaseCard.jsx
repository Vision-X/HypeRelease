import React, { Component } from 'react';

export default class ReleaseCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <div class="card mb-3">
        <h3 class="card-header">{data['name']}</h3>
        <div class="card-body">
          <h5 class="card-title">Release Date:</h5>
          <h6 class="card-subtitle text-muted">{data.relDate}</h6>
        </div>
        <img style={{height: "200px", width: "100%", display: "block", alt:"Card image"}} src={data.imgUrl}></img>
        <div class="card-body">
          <a href="#" class="card-link">Purchase on Adidas.com</a>
          <a href="#" class="card-link">Purchase on StockX</a>
        </div>
      </div>
    )
  }
}
