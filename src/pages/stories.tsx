import React, { useState, useEffect } from "react"
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
        <h1 className="x-large">ALL MARVEL STORIES </h1>
        <div className="line"></div>
        <ScrollStories height={800} />
      </section>
    </Layout>
  )
}
export default Stories
