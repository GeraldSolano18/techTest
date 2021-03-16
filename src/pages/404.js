import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
   <div className="section_content py-5">
     <h1 className="large">"404 Not found" </h1>
     <div className="line"></div>
   </div>
  </Layout>
)

export default NotFoundPage
