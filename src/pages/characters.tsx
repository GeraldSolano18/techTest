// If you don't want to use TypeScript you can delete this file!
import React, { useEffect, useState } from "react"
import { getAllCharacters } from "../services/characters"
import PropTypes from "prop-types"
import Scroll from "react-infinite-scroll-component"
import CustomCard from "../components/Card/CharacterCard"
// import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Banner from "../components/Banner/banner"
import Search from "../components/Search"
import "../assets/styles/components/Search/search.scss"

interface Props {
  comicId: number
  storyId: number
  useSearch: false
}

const Characters: React.FC<Props> = () => {
  const [characterCards, setCharacterCards] = useState([])
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    console.log("se ejecuta el useEffect")
    loadCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const loadCharacters = async () => {
    const options = {
      name: search,
      limit: 20,
      offset: 20 * currentPage,
      // comicId: props.comicId,
      // storyId: props.storyId,
    }

    const { data } = await getAllCharacters(options)
    if (data && data.results) {
      const newCards = data.results.map(c => {
        return (
          <CustomCard
            key={c.id}
            id={c.id}
            label={c.name}
            image={`${c.thumbnail.path}.${c.thumbnail.extension}`}
            link={`/character`}
            small={true}
          />
        )
      })

      setCharacterCards([...characterCards, ...newCards])
      setCurrentPage(currentPage + 1)
    }
  }
  console.log(characterCards.length)
  return (
    <Layout>
      <SEO title="Characters" />
      <Banner />
      <section className="section_content">
        <Search />
        <h1 className="x-large">Characters</h1>
        <div className="line"></div>

        <Scroll
          className="infinite-scroll"
          dataLength={characterCards.length}
          next={loadCharacters}
          hasMore={true}
          loader={
            <p style={{ textAlign: "center", marginTop: "1%" }}>
              More Characters incoming...
            </p>
          }
        >
          <div className="profiles">{characterCards}</div>
        </Scroll>
      </section>
    </Layout>
  )
}
export default Characters
