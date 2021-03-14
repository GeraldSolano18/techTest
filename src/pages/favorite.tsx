// If you don't want to use TypeScript you can delete this file!
import { RouteComponentProps } from "@reach/router"
import * as React from "react"
import { Link } from "gatsby"
// import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Banner from "../components/Banner/banner"

interface Props extends RouteComponentProps {}

const Favorite: React.FC<Props> = () => (
  <Layout>
    <SEO title="Favorite" />
    <Banner />
    <div>ner CONTAINERRR</div>
  </Layout>
)
export default Favorite
