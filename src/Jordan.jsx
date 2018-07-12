import React, { Fragment, Component } from 'react';

class Jordan extends Component {
  render() {
    return (
      <Fragment>
          {(this.props.data && this.props.data.map(item => {
            return (
            <div className="card mb-3">
              <h3 className="card-header">{item.name}</h3>
              <div className="card-body">
                <h5 className="card-title">Release Date:</h5>
                <h6 className="card-subtitle text-muted">{item.relDate}</h6>
                <br />
                <h5 className="card-title">Price:</h5>
                <h6 className="card-subtitle text-muted">{item.price} USD</h6>
              </div>
              <img style={{height: "200px", width: "100%", display: "block", alt:"Card image"}} src={item.imgUrl}></img>
              <div className="card-body">
                <a href="https://www.nike.com/us/en_us/c/jordan" target="_blank" className="card-link">Purchase on Nike.com</a>
                <a href="https://stockx.com/retro-jordans" target="_blank" className="card-link">Purchase on StockX</a>
              </div>
            </div>
            )
          })
        )}
      </Fragment>
    );
  }
}

export default Jordan;
