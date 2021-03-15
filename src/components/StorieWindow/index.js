import React, { useState, useEffect } from "react"
import { getAllStories } from "../../services/stories"
import CustomCard from "../../components/Card/CharacterCard"
import Scroll from "react-infinite-scroll-component"
const ArrowStories = props => {
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
      comicId: props.comic,
    }

    const { data } = await getAllStories(options)

    if (data && data.results) {
      const newCards = data.results.map(c => {
        return (
          <CustomCard
            id={c.id}
            label={c.title}
            // image={marvelPlaceholder}
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
    <div>
      <Scroll
        className="infinite-scroll my-4"
        dataLength={storyCards.length}
        next={loadCards}
        height={800}
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

export default ArrowStories
