import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ScrollCharacter from "../components/CharacterWindow/ScrollCharacter"
import Banner from "../components/Banner/banner"
import "../assets/styles/components/Search/search.scss"
import Searchbar from "../components/FilterCharacter"

const Characters = () => {
  return (
    <Layout>
      <SEO title="Characters" />
      <Banner />
      <section className="section_content">
        <ScrollCharacter height={800} title="ALL MARVEL CHARACTERS" useSearch />
        <div>
          <h1 className="x-large primary-text">FILTER CHARACTERS</h1>
          <div className="line"></div>
          <div className="py-1">
            <Searchbar />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Characters
