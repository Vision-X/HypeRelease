import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';

class Contact extends Component {
  render() {
    return (
      <div className="contact-div">
        <h2>HypeRelease v0.1</h2>
        <small>Contact Mike Marlow</small>
        <ReactContactForm to="michael.s.marlow@gmail.com" />
      </div>
    )
  }
}

export default Contact;
