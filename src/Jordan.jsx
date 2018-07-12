import React, { Fragment, Component } from 'react';
// import ReleaseCard from './ReleaseCard';

class Jordan extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getData = () => {
    let url = "https://webscraper-to-api.firebaseapp.com/jordans.json";
    let dataGetter = response => {
      let arr = [];
      for (let key in response) {
        arr.push(response[key]);
      }
    this.setState({ data: arr })
    console.log(this.state.data);
  }
    return fetch(url)
           .then(response => response.json())
           .then(dataGetter)
           .catch()
  }

  componentWillMount = () => {
    this.getData();
    console.log(this.state.data);
  }

  render() {
    return (
      <Fragment>
        <section>
          {(this.state.data && this.state.data.map(item => {
            {console.log(this.state.data);}
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
                <a href="#" className="card-link">Purchase on StockX</a>
              </div>
            </div>
            )
          })
        )}
        </section>
      </Fragment>
    );
  }
}

export default Jordan;
