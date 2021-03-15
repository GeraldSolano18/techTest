import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import { getComic } from "../../services/comics"
import DefaultImg from "../../components/DefaultImg/DefaultImg"
import { getThumbURL } from "../../utils"
import CharacterScroll from "../../components/CharacterWindow/ScrollCharacter"
import StoriesScroll from "../../components/StorieWindow"

const Comics = ({ params }) => {
  const [comic, setComic] = useState({})
  const comicId = params?.id || 0

  useEffect(() => {
    if (params?.id) {
      loadComic()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id])

  const loadComic = async () => {
    const { data } = await getComic(params.id)
    if (!data) return

    const { results } = data

    if (results && results[0]) {
      setComic(results[0])
    }
  }

  const renderDescription = () => {
    if (comic.description) {
      return <p className="Character-description">{comic.description}</p>
    }

    return (
      <p className="Character-description">
        There is no description available for this comic
      </p>
    )
  }

  const renderCreators = () => {
    if (!comic.creators?.items || comic.creators.items.length === 0) {
      return (
        <p className="Character-description">
          There is no creator available for this comic
        </p>
      )
    }

    return comic.creators.items.map(c => {
      return (
        <p className="Character-description">
          <span>{c.name}</span>
          <br />
          <span>{c.role}</span>
        </p>
      )
    })
  }

  const renderComicThumbnail = () => {
    const url = getThumbURL(comic.thumbnail)
    if (url) {
      return (
        <img
          className="img-fluid Character-image"
          src={url}
          alt={comic.title}
        />
      )
    }

    return <DefaultImg />
  }

  return (
    <Layout>
      <SEO title="Comic info" />
      <section className="section_detail">
        <div className="box">
          <div className="card">
            <div className="imgBx">
              <div>{renderComicThumbnail()}</div>
            </div>
            <div className="details">
              <h2>{comic.title}</h2>
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
      <CharacterScroll title="comic book characters" comicId={comicId} />
      <StoriesScroll comic={comicId} />
    </Layout>
  )
}

export default Comics
