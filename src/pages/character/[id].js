import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import ScrollComics from "../../components/ComicWindow"

import DefaultImg from "../../components/DefaultImg/DefaultImg"
import { getCharacter } from "../../services/characters"
import { getThumbURL } from "../../utils"
import ScrollStories from "../../components/StorieWindow"
// import ComicScroll from "../../components/ComicScroll"
// import StoriesScroll from "../../components/StoriesScroll"

const CharacterPage = ({ params }) => {
  const [character, setCharacter] = useState({})
  const [comics, setComics] = useState({})
  const characterId = params?.id || 0

  useEffect(() => {
    if (params?.id) {
      loadCharacter()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id])

  const loadCharacter = async () => {
    const { data } = await getCharacter(params?.id)

    if (!data) return

    const { results } = data

    if (results && results[0]) {
      setCharacter(results[0])
      setComics(results[0].comics.items)
    }
  }

  const renderDescription = () => {
    if (character.description) {
      return <p className="Character-description">{character.description}</p>
    }

    return (
      <p className="text-primary large">
        There is no description available for this character
      </p>
    )
  }

  const renderCreators = () => {
    if (!character.creators?.items || character.creators.items.length === 0) {
      return (
        <p className="text-primary large">
          There is no creator available for this character
        </p>
      )
    }

    return character.creators.items.map(c => {
      return (
        <p className="Character-description">
          <span>{c.name}</span>
          <br />
          <span>{c.role}</span>
        </p>
      )
    })
  }

  const renderCharacterThumbnail = () => {
    const url = getThumbURL(character.thumbnail)
    if (character.thumbnail) {
      return (
        <img
          className="img-fluid Character-image"
          src={url}
          alt={character.name}
        />
      )
    }
    return <DefaultImg className="Character-placeholder" />
  }

  return (
    <Layout>
      <SEO title="Character info" />
      {/* <h1 className="x-large">{character.name}</h1>
        <div className="line"></div> */}
      <section className="section_detail">
        <div className="box">
          <div className="card">
            <div className="imgBx">
              <div>{renderCharacterThumbnail()}</div>
            </div>
            <div className="details">
              <h2>{character.name}</h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className="Character-info">
            {/* <h1 className="x-large">{character.name}</h1> */}

            <p className="large">Descripcion</p>
            <p className="lead"> {renderDescription()}</p>
            <div className="line"></div>
            <p className="large">Creator</p>
            <div className="Character-info">{renderCreators()}</div>
            <div className="line"></div>
          </div>
        </div>
      </section>
      <ScrollComics
        height={400}
        title="Character's comics"
        characterId={characterId}
      />

      <ScrollStories
      title="Character's stories"
      characterId={characterId} height={400} />

    </Layout>
  )
}

export default CharacterPage
