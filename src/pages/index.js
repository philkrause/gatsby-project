import React from "react"
import { Link } from "gatsby"
import labs from "../images/64labs.png"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <img src={labs} />
      <h1>Hi 64 Labs</h1>
      <p>Welcome to my first Gatsby site.</p>
      <p>I am building this site to learn Gatsby</p>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>

      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
