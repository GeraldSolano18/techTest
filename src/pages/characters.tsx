import React, { useEffect, useState } from "react"
import { getAllCharacters } from "../services/characters"
import Scroll from "react-infinite-scroll-component"
import CustomCard from "../components/Card/CharacterCard"
import { BsSearch } from "react-icons/bs"
import debounce from "lodash.debounce"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Banner from "../components/Banner/banner"
import "../assets/styles/components/Search/search.scss"
import Searchbar from "../components/FilterCharacter"

interface Props {
  comicId: number
  storyId: number
  useSearch: false
}

const Characters: React.FC<Props> = props => {
  const [searchType, setSearchType] = useState("all")
  const [characterCards, setCharacterCards] = useState([])
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(0)
  const [matches, setMatches] = useState([])

  //SEARCH ALL CHARACTERS
  useEffect(() => {
    loadCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const debouncedFunction = debounce(text => {
    setCurrentPage(0)
    setCharacterCards([])
    setSearch(text)
  }, 700)

  const updateSearch = ({ target: { value } }) => {
    const trimmed = value.trim()

    if (trimmed !== search) {
      debouncedFunction(trimmed)
    }
  }
  const loadCharacters = async () => {
    const options = {
      name: search,
      limit: 20,
      offset: 20 * currentPage,
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
            itemType="characters"
          />
        )
      })

      setCharacterCards([...characterCards, ...newCards])
      setCurrentPage(currentPage + 1)
    } else {
      return <h1>NO SE ENCONTRO NADA</h1>
    }
  }

  const showNoItemsMessage = () => {
    if (!characterCards || characterCards.length === 0) {
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
      </div>
    )
  }
  return (
    <Layout>
      <SEO title="Characters" />
      <Banner />
      <section className="section_content">
        <div className="filters-buttons">{renderSearch()}</div>
        <h1 className="x-large primary-text ">All Marvel Characters</h1>
        <div className="line"></div>
        <Scroll
          className="infinite-scroll my-4"
          dataLength={characterCards.length}
          next={loadCharacters}
          height={800}
          hasMore={true}
          loader={
            <p style={{ textAlign: "center", marginTop: "1%" }}>Loading...</p>
          }
        >
          <div className="profiles"> {characterCards}</div>
        </Scroll>
        {showNoItemsMessage()}
        <div>
          <h1 className="x-large primary-text">FILTER CHARACTERS</h1>
          <div className="line"></div>
          <div className="py-1">
            <Searchbar/>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Characters
