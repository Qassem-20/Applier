import React from 'react'

const nav = () => {
  return (
    <div>
      <nav>
        <ul class="container-nav">
          <li><a href="/companyHome">Home</a></li>
          <li><a href="/CompanyHome">Medical Students</a></li>
          <li id='CoName'>Applier</li>
          <li><a href="/CompanyProfile">edit profile</a></li>
          <li><a href="/addOpportunity">add opportunity</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default nav