
import * as React from "react"
import { Link } from "gatsby"
// import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Banner from "../components/Banner/banner"

interface Props {}

const Stories: React.FC<Props> = () => (
  <Layout>
    <SEO title="Stories" />
    <Banner />
    <div>ner CONTAINERRR</div>
  </Layout>
)
export default Stories
