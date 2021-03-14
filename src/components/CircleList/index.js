import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Circle = props => {
  const { obj } = props
  return (
    <div>
      {!obj || obj.length !== 0 ? (
        <></>
      ) : (
        <>
          {obj.map(e => {
            ;<h1>Lead este es un personaje</h1>
          })}
        </>
      )}
    </div>
  )
}
export default Circle
