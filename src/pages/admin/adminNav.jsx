import '../../assets/css/admin.css';
import React, { Fragment } from 'react'
const adminNav = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li><a href="/">Companies</a></li>
          <li><a href="#About">Consumers</a></li>
          <li id='CoName'>Applier</li>
          <li><a href="/SignIn">Medical Students</a></li>
          <li><a href="#Services">Opportunities</a></li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default adminNav