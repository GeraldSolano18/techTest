import React, { useState, useEffect } from "react"
import { MdError } from "react-icons/md"
import debounce from "lodash.debounce"
import { getAllStories } from "../../services/stories"
import { getAllComics } from "../../services/comics"
import { BsSearch } from "react-icons/bs"
import Select from "../Select"

const Searchbar = () => {
  const [searchType, setSearchType] = useState("comics")
  const [search, setSearch] = useState("")
  const [matches, setMatches] = useState([])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, searchType])

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  const searchTypeChange = e => {
    setSearchType(e.target.value)
  }

  const debouncedFunction = debounce(text => {
    setSearch(text)
  }, 500)

  const handleSearchChange = ({ target: { value } }) => {
    debouncedFunction(value.trim())
  }

  const fetchData = async () => {
    if (!search || search.length < 4) {
      setMatches([])
      return
    }

    let results = []
    switch (searchType) {
      case "all":
        results = await getAllMatches()
        break
      case "stories":
        results = await getStorieMatches()
        break
      case "comics":
        results = await getComicMatches()
        break
      default:
        break
    }
    setMatches(results)
  }

  const getStorieMatches = async () => {
    try {
      const { data } = await getAllStories({ title: search, limit: 5 })
      const results = formatMatches(data.results, "stories")
      return results
    } catch (error) {
      return []
    }
  }

  const getAllMatches = async () => {
    try {
      const [{ data: characters }, { data: comics }] = await Promise.all([
        getAllStories({ title: search, limit: 5 }),
        getAllComics({ title: search, limit: 5 }),
      ])

      const results = [
        ...formatMatches(characters.results, "characters"),
        ...formatMatches(comics.results, "comics"),
      ]
      return results
    } catch (error) {
      return []
    }
  }

  const getComicMatches = async () => {
    try {
      const { data } = await getAllComics({ title: search, limit: 5 })
      const results = formatMatches(data.results, "comics")
      return results
    } catch (error) {
      return []
    }
  }

  const formatMatches = (matchList, itemType) => {
    if (!matchList || matchList.length === 0) {
      return []
    }

    return matchList.map(m => {
      let link = ""

      switch (itemType) {
        case "all":
          link = "/character"
          break
        case "stories":
          link = "/stories"
          break
        case "comics":
          link = "/comic"
          break
        default:
          link = "/character"
          break
      }

      return {
        id: m.id,
        name: m.name || "",
        title: m.title || "",
        description: m.description || "",
        thumbnail: m.thumbnail || "",
        type: itemType,
        link,
      }
    })
  }

  const reset = () => {
    setSearch("")
    setMatches([])
  }
  const renderMatches = () => {
    if (!matches || matches.length === 0 || !search) {
      return (
        <div className="my-5 d-flex">
          <h1 className="large">
            {" "}
            <MdError  className='mx-1'/>
            No results for your search{" "}
          </h1>
        </div>
      )
    }
    return matches.map(c => {
      return (        
        <div key={c.id}>
          <h1 className="large">{c.title}</h1>
          <div className="line"></div>
        </div>
      )
    })
  }

  return (
    <>
      <div className="HeaderSearchform">
        <div className="search-container">
          <div className="search-input">
            <BsSearch className="icon" />
            <input
              type="text"
              name="searchText"
              onChange={handleSearchChange}
              placeholder="Search..."
              autoComplete="off"
            />
          </div>
        </div>

        <Select
          className="dropdown ml-3"
          value={searchType}
          onChange={searchTypeChange}
          name="select"
          options={[
            { className: "text-dark", value: "comics", label: "Comics" },
            {
              className: "text-dark",
              value: "stories",
              label: "Stories",
            },
          ]}
        />
      </div>

      <div
        className={`${
          !matches || matches.length === 0 || !search ? "" : "profiles"
        }`}
      >
        {renderMatches()}
      </div>
    </>
  )
}

export default Searchbar
