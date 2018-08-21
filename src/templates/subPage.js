import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import parseEmoji from 'helpers/emoji'

const SubPage = props => {
  const { markdownRemark: post } = props.data
  const { transition } = props
  return (
    <Layout activeName={post.frontmatter.activeName}>
      <div style={transition && transition.style}>
        <div className="page article">
          <h1 className="title1 under-back">
            {parseEmoji(post.frontmatter.title)}
          </h1>
          {post.frontmatter.intro && (
            <span className="intro">{parseEmoji(post.frontmatter.intro)}</span>
          )}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export default SubPage

export const subPageQuery = graphql`
  query SubPageQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        intro
        path
        activeName
        title
      }
    }
  }
`