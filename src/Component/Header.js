import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="nav-center">
      <nav>
          <h4>Change colors</h4>
          <ul className="nav-links">
            <li>
              <Link to='/'>Name</Link>
            </li>
            <li>
              <Link to='/hexa'>Hexa Decimal</Link>
            </li>
            <li>
              <Link to='/rgb'>Rgb</Link>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Header
