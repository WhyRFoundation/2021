import React from 'react'

import { IndexPageQuery } from '../../../types/graphql-types'
import { TextSectionTemplate } from '../../components/homePageSections/TextSectionTemplate'
import { PartnersSectionTemplate } from '../../components/homePageSections/PartnersSectionTemplate'
import { PeopleSectionTemplate } from '../../components/homePageSections/PeopleSectionTemplate'
import { TilesGalleryTemplate } from '../../components/homePageSections/TilesGalleryTemplate'
import { SpeakersSectionTemplate } from '../../components/homePageSections/SpeakersSectionTemplate'
import { SponsorsSectionTemplate } from '../../components/homePageSections/SponsorsSectionTemplate'
import { TableSectionTemplate } from '../../components/homePageSections/TableSectionTemplate'

interface IndexPageProps {
  sections: IndexPageQuery['mdx']['frontmatter']['sections']
  body?: IndexPageQuery['mdx']['body']
}

export const PageContentCreator: React.FC<IndexPageProps> = ({
  sections,
  body,
}) => {
  return (
    <>
      {sections.map(section => {
        switch (section.type) {
          case 'text':
            return <TextSectionTemplate key={section.title} section={section} />
          case 'partners':
            return (
              <PartnersSectionTemplate key={section.title} section={section} />
            )
          case 'people':
            return (
              <PeopleSectionTemplate key={section.title} section={section} />
            )
          case 'gallery':
            return (
              <TilesGalleryTemplate key={section.title} section={section} />
            )
          case 'speakers':
            return (
              <SpeakersSectionTemplate key={section.title} section={section} />
            )
          case 'sponsors':
            return (
              <SponsorsSectionTemplate key={section.title} section={section} />
            )
          case 'tableContent':
            return <TableSectionTemplate section={section} body={body} />
          default:
            return <TextSectionTemplate key={section.title} section={section} />
        }
      })}
    </>
  )
}
