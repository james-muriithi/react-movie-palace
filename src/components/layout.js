import React from "react"
import PropTypes from "prop-types"

import Header from "./header/Header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
