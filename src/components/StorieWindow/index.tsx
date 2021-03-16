import React, { useState, useEffect } from "react"
import { getAllStories } from "../../services/stories"
import CustomCard from "../Card/CharacterCard"
import Scroll from "react-infinite-scroll-component"

interface ScrollStorie {
  characterId?: number
  // title: string
  height: number
  title: string
  comicId?: number
}

const ScrollStories: React.FC<ScrollStorie> = props => {
  const [storyCards, setStoryCards] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  useEffect(() => {
    loadCards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const loadCards = async () => {
    const options = {
      limit: 20,
      offset: 20 * currentPage,
      characterId: props.characterId,
      comicId: props.comicId,
    }

    const { data } = await getAllStories(options)

    if (data && data.results) {
      const newCards = data.results.map(c => {
        return (
          <CustomCard
            key={c.id}
            id={c.id}
            label={c.originalIssue.name}
            image={""}
            link={`/story`}
            itemType="stories"
          />
        )
      })

      setStoryCards([...storyCards, ...newCards])
      setCurrentPage(currentPage + 1)
    }
  }
  const showNoItemsMessage = () => {
    if (!storyCards || storyCards.length === 0) {
      return (
        <span className="CharacterComics-title text-center">
          There are no items available
        </span>
      )
    }
  }
  return (
    <div className="filters-buttons">
      <h1 className="x-large title-text"> {props.title}</h1>
      <div className="line"></div>
      <Scroll
        className="infinite-scroll my-4"
        dataLength={storyCards.length}
        next={loadCards}
        height={props.height}
        hasMore={true}
        loader={
          <p style={{ textAlign: "center", marginTop: "1%" }}>Loading...</p>
        }
      >
        <div className="profiles"> {storyCards}</div>
      </Scroll>
      {showNoItemsMessage()}
    </div>
  )
}

export default ScrollStories
