import React, { useState, useEffect } from "react"
import { getAllStories } from "../services/stories"
import Layout from "../components/Layout"
import ScrollStories from "../components/StorieWindow"
import SEO from "../components/Seo"
import Banner from "../components/Banner/banner"
// import marvelPlaceholder from "../../assets/images/marvel-placeholder.jpg"

interface Props {
 
}

const Stories: React.FC<Props> = props => {
  return (
    <Layout>
      <SEO title="Stories" />
      <Banner />
      <section className="section_content ">
        <h1 className="x-large">ALL MARVEL STORIES </h1>
        <div className="line"></div>
        <ScrollStories />
      </section>
    </Layout>
  )
}
export default Stories
