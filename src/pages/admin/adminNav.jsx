import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import React, { Component } from 'react'
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";


export class adminNav extends Component {
  render() {
    return (
      <SideNav expanded={this.state.isVisible}>
      <SideNav.Toggle
        onClick={() => {
          this.setState({ isVisible: !this.state.isVisible });
        }}
      />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="placed orders">
          <NavIcon>
            <i
              className="fa fa-fw fa-line-chart"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>placed orders</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
    )
  }
}

export default adminNav