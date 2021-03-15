// If you don't want to use TypeScript you can delete this file!
import { RouteComponentProps } from "@reach/router"
import * as React from "react"
import { Link } from "gatsby"
import CustomCard from "../components/Card/CharacterCard"
import { useSelector } from "react-redux"
// import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Banner from "../components/Banner/banner"

interface Props extends RouteComponentProps {}

const Favorites: React.FC<Props> = () => {
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
          return (
            <span className="lead ">
              There are no items available
            </span>
          )
        }
        return cardList.map(c => {
          return (
            <CustomCard
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
      <section className="section_content py-4">
        <h1 className="x-large">FAVORITE CHARACTERS</h1>
        <div className="line"></div>
        {renderCards(favoriteCharacters)}
        <h1 className="x-large">FAVORITE COMICS</h1>
        <div className="line"></div>
        {renderCards(favoriteComics)}
        <h1 className="x-large">FAVORITE STORIES</h1>
        <div className="line"></div>
        {renderCards(favoriteStories)}
      </section>
    </Layout>
  )
}
export default Favorites
