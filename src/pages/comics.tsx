// If you don't want to use TypeScript you can delete this file!
import { RouteComponentProps } from "@reach/router"
import * as React from "react"
import { Link } from "gatsby"
// import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Banner from "../components/Banner/banner"
import Search from "../components/Search"

interface Props extends RouteComponentProps {}

const Comics: React.FC<Props> = () => (
  <Layout>
    <SEO title="Comics" />
    <Banner />
    <section className="section_content">
        <Search/>
        <h1 className="x-large">Comics</h1>
        <div className="line"></div>
        {/* <div className="profiles">{characterCards}</div> */}
      </section>
  </Layout>
)
export default Comics
