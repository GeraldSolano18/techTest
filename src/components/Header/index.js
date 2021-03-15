import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar bg-light">
      <h1>
        <Link to="/">
          MARVEL
        </Link>
      </h1>
      <ul className="bold">
       
        <li>
          <Link to="/featured">featured</Link>
        </li>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
