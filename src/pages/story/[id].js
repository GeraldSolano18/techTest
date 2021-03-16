import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import PlaceholderImage from "../../components/DefaultImg/DefaultImg"
//import PlaceholderImage from "../../components/PlaceholderImage"
import ComicScroll from "../../components/ComicWindow"
import CharacterScroll from "../../components/CharacterWindow/ScrollCharacter"
import { getStory } from "../../services/stories"

const StoriesPage = ({ params }) => {
  const [story, setStory] = useState({})
  const storyId = params?.id || 0

  useEffect(() => {
    if (params?.id) {
      loadStory()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id])

  const loadStory = async () => {
    const { data } = await getStory(params.id)
    if (!data) return

    const { results } = data

    if (results && results[0]) {
      setStory(results[0])
    }
  }

  const renderDescription = () => {
    if (story.title) {
      return <p>{story.title}</p>
    }

    return (
      <p className="Character-description">
        There is no description available for this story
      </p>
    )
  }
  const renderTitle = () => {
    if (story.title) {
      return (
        <p className="Character-description">{story.originalIssue.name}</p>
      )
    }
  }

  const renderCreators = () => {
    if (!story.creators?.items || story.creators.items.length === 0) {
      return (
        <p className="Character-description">
          There is no creator available for this story
        </p>
      )
    }

    return story.creators.items.map(c => {
      return (
        <p className="Character-description">
          <span>{c.name}</span>
          <br />
          <span>{c.role}</span>
        </p>
      )
    })
  }

  const renderStoryThumbnail = () => {
    //None of the stories bring thumb images with them
    return <PlaceholderImage className="Character-placeholder" />
  }

  return (
    <Layout>
      <SEO title="story info" />

      <section className="section_detail">
        <div className="imgBx">
          <div>{renderStoryThumbnail()}</div>
        </div>
        <div className="">
          <div className="Character-info">
            <h1 className="x-large title-text">{renderTitle()}</h1>
            <div className="line"></div>
            <p className="large">Descripcion</p>
            <p className="lead"> {renderDescription()}</p>
            <div className="line"></div>
            <p className="large">Creator</p>
            <div className="renderCreator">{renderCreators()}</div>
            <div className="line"></div>
          </div>
        </div>
      </section>

      <ComicScroll
        storyId={storyId}
        height={400}
        title="Comics featured in this story:"
      />
      <CharacterScroll
        storyId={storyId}
        height={600}
        title=" Characters featured in this story:"
      />
    </Layout>
  )
}

export default StoriesPage
