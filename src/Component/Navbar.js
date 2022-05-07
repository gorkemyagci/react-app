import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div className='navbar navbar-dark bg-dark text-white navbar-expand-lg d-flex justify-content-between px-5' id='nav'>
        <div className='navbar-brand'>
            <a href='#' style={{color:"#fff",textDecoration:"none"}}>
                Add Cart
            </a>
        </div>
        <ul className='navbar-nav'>
            <li className='nav-item'>
               <a href='#' className='nav-link'>My Account</a>
            </li>
            <li className='nav-item active'>
               <a href='#' className='nav-link'>Credit Card</a>
            </li>
        </ul>
      <form className="form-inline my-2 my-lg-0 d-flex">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      </div>
    )
  }
}

export default Navbar;