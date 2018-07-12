import React, { Fragment, Component } from 'react';
// import ReleaseCard from './ReleaseCard';
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
    {console.log("yeezy data", this.props.data)}
    {console.log("jordan data", this.props.jData)}
    return (
      <Fragment>
          {this.renderMe()}
      </Fragment>
    );
  }
}

export default ShowAll;
