import React from "react"
import Layout from "../components/Layout"
import ScrollStories from "../components/StorieWindow"
import SEO from "../components/Seo"
import Banner from "../components/Banner/banner"

const Stories = () => {
  return (
    <Layout>
      <SEO title="Stories" />
      <Banner />
      <section className="section_content ">

        <ScrollStories title="ALL MARVEL STORIES" height={800} />
      </section>
    </Layout>
  )
}
export default Stories
