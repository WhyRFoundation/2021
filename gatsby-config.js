module.exports = {
  siteMetadata: {
    title: `Why R? 2020 Conference`,
    author: `Emil Buszyło, Marcin Kosinski and Michał Burdukiewicz`,
    description: `Why R? 2020: an international conference about R applications, ranging from pure science to business`,
    siteUrl: 'https://test.io',
    logo: `content/assets/whyr-logo.png`,
    fbPageId: `378708019146780`,
    dateModified: new Date(),
    footer: [
      {
        role: 'Design & Creator',
        people: ['Emil Buszyło'],
        links: ['https://www.linkedin.com/in/emil-buszy%C5%82o-6a6708139/'],
      },
      {
        role: 'Content',
        people: ['Michał Burdukiewicz', 'Marcin Kosiński'],
        links: [
          'https://www.researchgate.net/profile/Michal_Burdukiewicz',
          'https://r-addict.com/',
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/products`,
        name: `products`,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `pagePrefixPath`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          Mdx: {
            title: node => node.frontmatter.title,
            slug: node => node.fields.slug,
            pagePrefixPath: node => node.frontmatter.pagePrefixPath || null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '2360997087533798',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Why R? 2020 Conference`,
        short_name: `Why R?`,
        start_url: `/`,
        background_color: `#929fab`,
        theme_color: `#d7aa8d`,
        display: `minimal-ui`,
        icon: `content/assets/whyr-logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.ts`,
        codegen: true,
        codegenDelay: 250,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Montserrat',
            weights: ['200..700'],
          },
          {
            family: 'Roboto',
            weights: ['200..700'],
          },
        ],
      },
    },
  ],
}
