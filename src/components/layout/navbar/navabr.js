import React, { Component } from "react";
import { Menuitems } from "./menuitems";
import {NavLink} from 'react-router-dom'
import Logo from "../../img/logo.png";
import './navbar.css'
import '../../home/client.css'

class Navbar extends Component {
    state = { clicked: false}

    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
  render() {
    return (
      <div className=" absolute sticky w-screen top-0 z-10 ">

      <nav className="NavbarItems bg-gray-900">
    
        <div className="  mx-auto my-8 ">
        <img src={Logo} alt="Logo" width="350px" height="350px" className="mt-4"/>
      </div>

        <div className="menu-icon " onClick={this.handleClick}>
        <i className={this.state.clicked ? 'fa fa-times': 'fa fa-bars'}></i>
        </div>

        <ul className={`${this.state.clicked ? 'nav-menu-active': 'nav-menu'} grid grid-cols-6  head mx-auto w-auto text-base  `}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index} className=" py-4">
                <NavLink activeClassName={item.active} to={item.url} className={`${item.className}  mx-auto text-sm`}>
                    {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

      </nav>
            </div>
    );
  }
}
export default Navbar;
