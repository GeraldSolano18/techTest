import React, { useEffect, useState } from "react"
import { getAllCharacters } from "../../services/characters"
import Scroll from "react-infinite-scroll-component"
import CustomCard from "../Card/CharacterCard"
import { BsSearch } from "react-icons/bs"
import debounce from "lodash.debounce"

interface ScrollProps {
  title: string
  comicId?: number
  storyId?: number
  useSearch?: boolean
  height:number
}

const ScrollCharacter: React.FC<ScrollProps> = props => {
  const [characterCards, setCharacterCards] = useState([])
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(0)

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
      comicId: props.comicId,
      storyId: props.storyId,
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
    if (!props.useSearch) {
      return <></>
    }

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
    <div className="filters-buttons">
      <div className="filters-buttons">{renderSearch()}</div>
      <h1 className="x-large primary-text "> {props.title}</h1>
      <div className="line"></div>

      <Scroll
        className="infinite-scroll my-4"
        dataLength={characterCards.length}
        next={loadCharacters}
        height={props.height}
        hasMore={true}
        loader={
          <p style={{ textAlign: "center", marginTop: "1%" }}>Loading...</p>
        }
      >
        <div className="profiles"> {characterCards}</div>
      </Scroll>
      {showNoItemsMessage()}
    </div>
  )
}

export default ScrollCharacter
