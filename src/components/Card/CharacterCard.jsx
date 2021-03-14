// If you don't want to use TypeScript you can delete this file!
import { RouteComponentProps } from "@reach/router"
import * as React from "react"
import { Link } from "gatsby"
// import { useNearScreen } from "../../Hooks/useNearScreen.js"
// import { PageProps, Link, graphql } from "gatsby"

// interface Props extends RouteComponentProps {
//   small: boolean

//   id: number
//   image: string
//   link: string
//   label: string
//   // itemType: PropTypes.oneOf(["characters", "CharacterCard", "stories"]).isRequired,
//   // useFavorite: PropTypes.bool,
// }

const CharacterCard = props => {
  // const [show, element] = useNearScreen()
  console.log(props)

  return (
    <>
      {/* {show && ( */}
      
        <div className="card-character bg-ligth">
          <img alt="img" src={props.image} />
          <div className='card-content'>
            <h2>{props.label}</h2>
          
            <Link to={`${props.link}/${props.id}`} className="my-1 btn btn-primary">
              See more
            </Link>
          </div>
        </div>
       
      {/* )} */}
    </>
  )
}
export default CharacterCard
