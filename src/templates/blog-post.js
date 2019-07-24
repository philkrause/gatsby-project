import React from "react"
import Link from "gatsby-link"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>
        {post.frontmatter.author} on {post.frontmatter.date}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
