import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Someday this will be a proper site!</h1>
    <p>Until then enjoy a random image from Unsplash!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src="https://source.unsplash.com/random/800x600"></img>
    </div>
  </Layout>
)

export default IndexPage
