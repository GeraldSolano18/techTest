import React, { useEffect, useState } from "react"
import { Link } from "gatsby"


import Layout from "../components/Layout"
import SEO from "../components/Seo"

interface Props {
 
}

const Featured: React.FC<Props> = props => {
 

  return (
    <Layout>
      <SEO title="Featured" />
  
      <section className="section_content my-5">
       
        <h1 className="x-large">Featured</h1>
        <div className="line"></div>
       
      </section>
      <div></div>
    </Layout>
  )
}

export default Featured
