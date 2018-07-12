import React, { Fragment, Component } from 'react';
import Jordan from './Jordan';
import Yeezy from './Yeezy';

class ShowAll extends Component {
  renderMe = () => {
    if (this.props.data.data && this.props.data.jData) {
      return (
        <Fragment>
          <Yeezy data={this.props.data.data} />
          <Jordan data={this.props.data.jData} />
        </Fragment>
      )
    } else {
      return (
        <p>Whats up, dog...?</p>
      )
    }
  }


  render() {
    return (
      <Fragment>
          {this.renderMe()}
      </Fragment>
    );
  }
}

export default ShowAll;
