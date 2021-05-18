import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { LocationProvider } from '@reach/router'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { BlogPostBySlugQuery } from '../../types/graphql-types'

interface BlogPostTemplateProps {
  data: BlogPostBySlugQuery
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title

  return (
    <LocationProvider>
      {locationContext => (
        <Layout title={siteTitle}>
          <Seo
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
            location={locationContext.location.pathname}
          />
          <h1>{post.frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Layout>
      )}
    </LocationProvider>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
