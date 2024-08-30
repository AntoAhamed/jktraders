import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{color: 'white'}}>Home</Link>
          </li>
          <li>
            <Link to="/" style={{color: 'white'}}>Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar
