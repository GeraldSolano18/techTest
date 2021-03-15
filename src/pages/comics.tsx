// If you don't want to use TypeScript you can delete this file!
import { RouteComponentProps } from "@reach/router"
import React, { useState, useEffect } from "react"
import Scroll from "react-infinite-scroll-component"
import { Link } from "gatsby"
// import { PageProps, Link, graphql } from "gatsby"
import { getAllComics } from "../services/comics"
import { BsSearch } from "react-icons/bs"
import CustomCard from "../components/Card/CharacterCard"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Banner from "../components/Banner/banner"
import debounce from "lodash.debounce"
import Select from "../components/Select"

interface Props extends RouteComponentProps {
  characterId: number
  storyId: number
  useSearch: boolean
}

const Comics: React.FC<Props> = props => {
  const [comicCards, setComicCards] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState("")
  const [format, setFormat] = useState("")

  useEffect(() => {
    loadComics()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, format])

  const debouncedFunction = debounce(text => {
    setCurrentPage(0)
    setComicCards([])
    setSearch(text)
  }, 700)

  const updateSearch = ({ target: { value } }) => {
    const trimmed = value.trim()

    if (trimmed !== search) {
      debouncedFunction(trimmed)
    }
  }

  const updateFormat = ({ target: { value } }) => {
    setCurrentPage(0)
    setComicCards([])
    setFormat(value)
  }

  const loadComics = async () => {
    const options = {
      title: search,
      limit: 20,
      offset: 20 * currentPage,
      characterId: props.characterId,
      storyId: props.storyId,
      format,
    }

    const { data } = await getAllComics(options)

    if (data && data.results) {
      const newCards = data.results.map(c => {
        return (
          <CustomCard
            key={c.id}
            id={c.id}
            label={c.title}
            image={`${c.thumbnail.path}.${c.thumbnail.extension}`}
            link={`/comic`}
            itemType="comics"
          />
        )
      })

      setComicCards([...comicCards, ...newCards])
      setCurrentPage(currentPage + 1)
    }
  }

  const showNoItemsMessage = () => {
    if (!comicCards || comicCards.length === 0) {
      return (
        <span className="CharacterComics-title text-center">
          There are no items available
        </span>
      )
    }
  }

  const renderSearch = () => {
    return (
      <div className="search-container">
      <div className="search-input">
        <BsSearch className="icon" />
        <input
          type="text"
          name="searchText"
          onChange={updateSearch}
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
      <Select
          className="search-input input-dark"
          value={format}
          onBlur={updateFormat}
          name="select"
          options={[
            { value: "", label: "All" },
            { value: "comic", label: "Comic" },
            { value: "magazine", label: "Magazine" },
            { value: "trade paperback", label: "Trade Paperback" },
            { value: "hardcover", label: "Hardcover" },
            { value: "digest", label: "Digest" },
            { value: "graphic novel", label: "Graphic Novel" },
            { value: "digital comic", label: "Digital Comic" },
            { value: "infinite comic", label: "Infinite Comic" },
          ]}
        />
    </div>
    )
  }

  return (
    <Layout>
      <SEO title="Comics" />
      <Banner />
      <section className="section_content">
        <div className="filters-buttons">{renderSearch()}</div>
        <h1 className="x-large">ALL Marvel Comics</h1>
        <div className="line"></div>

        <Scroll
          className="infinite-scroll my-4"
          dataLength={comicCards.length}
          next={loadComics}
          height={800}
          hasMore={true}
          loader={
            <p style={{ textAlign: "center", marginTop: "1%" }}>Loading...</p>
          }
        >
        <div className="profiles">{ comicCards}</div>
        
        </Scroll>
        {showNoItemsMessage()}


      </section>
    </Layout>
  )
}
export default Comics
