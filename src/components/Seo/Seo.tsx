import React from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps extends HelmetProps {
  description?: string
  keywords?: string
  image?: string
  location?: string
  schema?: any
  lang?: string
}

export const Seo: React.FC<SeoProps> = ({
  description = '',
  keywords = '',
  title,
  image,
  location,
  schema,
  lang = 'en',
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            logo
            fbPageId
            dateModified
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const ogImage = image || site.siteMetadata.logo
  const metaCanonical = location || site.siteMetadata.siteUrl

  //TODO full event address and information about tickets
  //TODO If schedule is a individual page, then you will need to add url
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    url: metaCanonical,
    description: metaDescription,
    name: title,
    eventSchedule: {
      '@type': 'Schedule',
      startDate: '2021-12-10',
      endDate: '2021-12-10',
      startTime: '9:00',
      endTime: '18:00',
      scheduleTimezone: 'Europe/Warsaw',
    },
  }

  const schemaOrg = schema || defaultSchema

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[{ rel: `canonical`, href: metaCanonical }]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `language`,
          content: 'PL',
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:img`,
          content: ogImage,
        },
        {
          property: `fb:page_id`,
          content: site.siteMetadata.fbPageId,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
      ]}
      script={[
        { type: 'application/ld+json', innerHTML: JSON.stringify(schemaOrg) },
      ]}
    />
  )
}
