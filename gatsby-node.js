const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const blogListing = path.resolve(`./src/templates/blog.tsx`)
  const productsListing = path.resolve(`./src/templates/productsListing.tsx`)

  try {
    const data = await graphql(`
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                pageTemplate
                pagePrefixPath
                title
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `)

    if (!data) {
      console.error(data.error)
      return
    }
    // Create blog and blog posts
    const allData = data.data.allMdx.edges
    const posts = allData.filter(
      edge => edge.node.frontmatter.pageTemplate === 'blogPostTemplate'
    )

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: blogListing,
      pageLength: 4, // This is optional and defaults to 10 if not used
      pathPrefix: 'blog', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })

    // Create products listing and single product page
    const products = allData.filter(
      edge => edge.node.frontmatter.pageTemplate === 'productTemplate'
    )

    createPaginatedPages({
      edges: products,
      createPage: createPage,
      pageTemplate: productsListing,
      pageLength: 4, // This is optional and defaults to 10 if not used
      pathPrefix: 'products', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })

    allData.map(element => {
      if (element.node.frontmatter.pageTemplate === 'homePageTemplate') {
        pathName = '/'
        component = path.resolve(`src/pages/index.tsx`)
      } else {
        ;(pathName =
          element.node.frontmatter.path ||
          `${element.node.frontmatter.pagePrefixPath}${element.node.fields.slug}`),
          (component = path.resolve(
            `./src/templates/${String(
              element.node.frontmatter.pageTemplate
            )}.tsx`
          ))
      }
      createPage({
        path: pathName,
        component,
        context: {
          slug: element.node.fields.slug,
        },
      })
    })
  } catch (error) {
    console.error(error)
  }
}

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === `Mdx` || node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
