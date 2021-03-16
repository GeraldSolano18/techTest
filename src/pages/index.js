import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
const App = () => (
  <Layout>
    <SEO title="App" />
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <a
            aria-label="Marvel Official Website"
            href="https://www.marvel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
          <p className="x-large title-text text-primary">
            YOU CAN SEARCH, FILTER AND FIND
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default App
