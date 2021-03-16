import * as React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "gatsby"
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { getActionTypes } from "./utils"
import ImgDefault from "../DefaultImg/DefaultImg"

const CharacterCard  = props => {
  const dispatch = useDispatch()

  const isFavorite = useSelector(state => {
    try {
      const found = state.favorites[props.itemType].find(f => f.id === props.id)
      return !!found
    } catch (error) {
      return false
    }
  })

  const favoriteClick = () => {
    const actionTypes = getActionTypes(props.itemType)
    if (!actionTypes) {
      return
    }

    if (!isFavorite) {
      dispatch({
        type: actionTypes.add,
        payload: {
          id: props.id,
          label: props.label,
          image: props.image,
          itemType: props.itemType,
          link: props.link,
        },
      })
    } else {
      dispatch({ type: actionTypes.remove, payload: { id: props.id } })
    }
  }

  const renderFavoriteButton = () => {
    return (
      <button
        aria-label="Favorite"
        onClick={favoriteClick}
        className="CustomCard-favorite"
      >
        {!isFavorite ? (
          <BsHeart className="like-button" />
        ) : (
          <BsHeartFill className="like-button" />
        )}
      </button>
    )
  }

  return (
    <>
      <div className="card-character bg-ligth">
        <div className="testOpacity">
          {props.image ? <img alt="img" src={props.image} /> : <ImgDefault />}

          <div className="contentOpacity">{renderFavoriteButton()}</div>
        </div>
        <div className="card-content">
          <h2>{props.label}</h2>
          <div className="card-buttons">
            <Link
              to={`${props.link}/${props.id}`}
              className="my-1 btn btn-primary"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default CharacterCard
