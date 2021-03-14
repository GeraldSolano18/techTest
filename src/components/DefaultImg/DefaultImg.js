import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
  return <StaticImage src='../../images/marvel-placeholder.jpg' alt="A dinosaur" />
}

// Image.defaultProps = {
//   className: "",
// }

// Image.propTypes = {
//   className: PropTypes.string,
// }
export default Image
