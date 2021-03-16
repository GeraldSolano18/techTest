import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <nav className="navbar bg-light">
      <h1>
        <Link to="/">MARVEL</Link>
      </h1>
      <ul className="bold">
        <li>
          <Link to="/comics"> Comics</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/favorites">Your Favorites </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
