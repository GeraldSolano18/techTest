import * as React from "react"
import CustomCard from "../components/Card/CharacterCard"
import { AiFillStar } from "react-icons/ai"
import { useSelector } from "react-redux"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
const Favorites = () => {
  const favoriteCharacters = useSelector(state => {
    const list = state && state.favorites ? state.favorites.characters : []
    return list
  })

  const favoriteComics = useSelector(state => {
    const list = state && state.favorites ? state.favorites.comics : []
    return list
  })

  const favoriteStories = useSelector(state => {
    const list = state && state.favorites ? state.favorites.stories : []
    return list
  })
  const renderCards = cardList => {
    if (!cardList || cardList.length === 0) {
      return <span className="lead ">There are no items available</span>
    }
    return cardList.map(c => {
      return (
        <CustomCard
          key={c.id}
          id={c.id}
          label={c.label}
          image={c.image}
          link={c.link}
          itemType={c.itemType}
        />
      )
    })
  }

  return (
    <Layout>
      <SEO title="Favorites" />
      <section className="section_content my-5">
        <h1 className="x-large title-text">
          <AiFillStar /> FAVORITE CHARACTERS
          <AiFillStar />
        </h1>
        <div className="line"></div>
        <div className="profiles">{renderCards(favoriteCharacters)}</div>
        <h1 className="x-large title-text">
          <AiFillStar /> FAVORITE COMICS
          <AiFillStar />
        </h1>
        <div className="line"></div>
        <div className="profiles">{renderCards(favoriteComics)}</div>
        <h1 className="x-large title-text">
          <AiFillStar />
          FAVORITE STORIES
          <AiFillStar />
        </h1>
        <div className="line"></div>
        <div className="profiles">{renderCards(favoriteStories)}</div>
      </section>
    </Layout>
  )
}
export default Favorites
