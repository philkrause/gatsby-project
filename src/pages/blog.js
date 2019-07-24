import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function BlogPage({ data }) {
  return (
    <Layout>
      <div>
        <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <div key={post.id}>
              <h3>{post.node.frontmatter.title}</h3>
              <small>
                Posted By {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.date}
              </small>
              <br />
              <br />
              <Link to={post.node.frontmatter.path}>Read More</Link>
              <br />
              <br />
              <hr />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`
