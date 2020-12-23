import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
    <div id="register">
      <h4>You cannot reserve during these times </h4>
      {this.props.reservations.map(r => {
        return <div key={r.time}>{r.day} @ {r.time}</div>
      })}
    </div>)
  }
}

export default Register