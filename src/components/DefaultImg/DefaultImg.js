import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
  return (
    <StaticImage
      src="../../images/marvel-placeholder.jpg"
      alt="A default img"
      style={{height:"100%"}}
    />
  )
}
export default Image
