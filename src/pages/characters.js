import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ScrollCharacter from "../components/CharacterWindow/ScrollCharacter"
import Banner from "../components/Banner/banner"

const Characters = () => {
  return (
    <Layout>
      <SEO title="Characters" />
      <Banner />
      <section className="section_content">
        <ScrollCharacter height={800} title="ALL MARVEL CHARACTERS" useSearch />
      </section>
    </Layout>
  )
}
export default Characters
