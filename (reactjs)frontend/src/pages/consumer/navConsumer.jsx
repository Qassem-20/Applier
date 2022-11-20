import '../../assets/css/consumer.css';
import React, { Component, Fragment } from 'react'

export class navConsumer extends Component {
  render() {
    return (
      <Fragment>
      <nav>
        <ul>
          <li><a href="/medicalStudent">Medical Students</a></li>
          <li><a href="/consumerProfile">Profile</a></li>
          <li><h2>Applier</h2></li>
          <li><a href="/opportunities">Profile</a></li>
          <li><a href="/medicalStudent">Medical Students</a></li>
        </ul>
      </nav>
    </Fragment>
    )
  }
}

export default navConsumer