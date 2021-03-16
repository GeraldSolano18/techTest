import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Banner from "../components/Banner/banner"
import ScrollComics from "../components/ComicWindow"

const Comics = () => {
  return (
    <Layout>
      <SEO title="Comics" />
      <Banner />
      <section className="section_content">
        <ScrollComics height={800} useSearch title="ALL MARVEL COMICS" />
      </section>
    </Layout>
  )
}
export default Comics
