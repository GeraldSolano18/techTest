import React from "react"
import { AiOutlineFileSearch } from "react-icons/ai"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ScrollCharacter from "../components/CharacterWindow/ScrollCharacter"
import Banner from "../components/Banner/banner"
import Searchbar from "../components/FilterCharacter"

const Characters = () => {
  return (
    <Layout>
      <SEO title="Characters" />
      <Banner />
      <section className="section_content">
        <ScrollCharacter height={800} title="ALL MARVEL CHARACTERS" useSearch />
        <div>
          <h1 className="x-large title-text">
            <AiOutlineFileSearch className="mx-1" />
            FILTER CHARACTERS
          </h1>
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
