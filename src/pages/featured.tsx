import React, { useEffect, useState } from "react"
import { Link } from "gatsby"


import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Banner from "../components/Banner/banner"
import Search from "../components/Search"

interface Props {
 
}

const Featured: React.FC<Props> = props => {
 

  return (
    <Layout>
      <SEO title="Featured" />
      <Banner />
      <section className="section_content">
        <Search />
        <h1 className="x-large">Featured</h1>
        <div className="line"></div>
       
      </section>
      <div></div>
    </Layout>
  )
}

export default Featured
