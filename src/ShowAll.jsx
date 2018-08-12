import React, { Fragment, Component } from "react";
import Jordan from "./Jordan";
import Yeezy from "./Yeezy";

class ShowAll extends Component {
  renderMe = () => {
    if (this.props.data.yeezyData && this.props.data.jordanData) {
      return (
        <Fragment>
          <Yeezy data={this.props.data.yeezyData} />
          <Jordan data={this.props.data.jordanData} />
        </Fragment>
      );
    } else {
      return <p>Whats up, dog...?</p>;
    }
  };

  render() {
    return <Fragment>{this.renderMe()}</Fragment>;
  }
}

export default ShowAll;
