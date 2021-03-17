import React, { useState, useEffect } from "react"
import { MdError } from "react-icons/md"
import Scroll from "react-infinite-scroll-component"
import { getAllComics } from "../../services/comics"
import debounce from "lodash.debounce"
import Select from "../Select"
import { BsSearch } from "react-icons/bs"
import CustomCard from "../Card/CharacterCard"
import { AiOutlineFileSearch } from "react-icons/ai"

const ScrollComics = props => {
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
      <div className="HeaderSearchform">
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
          className="search-input"
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
    <div className="window-width">
      <div className="filters-buttons">{renderSearch()}</div>
      <h1 className="x-large title-text">
        <AiOutlineFileSearch className="mx-1" /> {props.title}
      </h1>
      <div className="line"></div>
      {!comicCards || comicCards.length === 0 ? (
        <div> {showNoItemsMessage()}</div>
      ) : (
        <Scroll
          className="infinite-scroll my-4"
          dataLength={comicCards.length}
          next={loadComics}
          height={props.height}
          hasMore={true}
        >
          <div className="profiles">{comicCards}</div>
        </Scroll>
      )}
    </div>
  )
}

export default ScrollComics
