import React from "react"
import Header from "../Header"
import '../../assets/styles/styles.scss'

const Layout = ({ children }) => {

  return (
    <>
      <Header/>
      <div>
        <main> {children}</main>
        <footer
         className="footer"
        >
          ©copyright
          {` `}
          <a href="https://github.com/GeraldSolano18">Gerald Solano</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
