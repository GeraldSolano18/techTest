import React, { useEffect, useState } from "react"
import { getAllCharacters } from "../../services/characters"
import Scroll from "react-infinite-scroll-component"
import { MdError } from "react-icons/md"
import CustomCard from "../Card/CharacterCard"
import { BsSearch } from "react-icons/bs"
import debounce from "lodash.debounce"
import { AiOutlineFileSearch } from "react-icons/ai"

const ScrollCharacter = props => {
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
    }
  }

  const showNoItemsMessage = () => {
    if (!characterCards || characterCards.length === 0) {
      return (
        <div className="my-5 d-flex">
          <h1 className="large">
            <MdError className="mx-1" />
            No results for your search{" "}
          </h1>
        </div>
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
    <div className="window-width">
      <div className="filters-buttons">
        {renderSearch()}
        </div>
      
      <h1 className="x-large title-text">
        {" "}
        <AiOutlineFileSearch className="mx-1" /> {props.title}
      </h1>
      <div className="line"></div>
      {!characterCards || characterCards.length === 0 ? (
        <div>{showNoItemsMessage()}</div>
      ) : (
        <Scroll
          className="infinite-scroll my-4"
          dataLength={characterCards.length}
          next={loadCharacters}
          height={props.height}
          hasMore={true}
        >
          <div className="profiles"> {characterCards}</div>
        </Scroll>
      )}
    </div>
  )
}

export default ScrollCharacter
