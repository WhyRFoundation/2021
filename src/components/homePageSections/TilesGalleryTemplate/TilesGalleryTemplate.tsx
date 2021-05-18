import React from 'react'

import { SectionTitle } from '../../UI/SectionTitle'
import { TileItemProps } from './TileItem'
import { MobileTilesGalleryTemplate } from './MobileTilesGalleryTemplate'
import { DesktopTilesGalleryTemplate } from './DesktopTilesGalleryTemplate'
import { MediaQueryWrapper } from '../../UI/MediaQueryWrapper'
import { SectionWrapper } from '../../UI/SectionWrapper'

interface TilesGalleryProps {
  section: SectionProps
}

interface SectionProps {
  title?: string
  images?: TileItemProps[]
}

export const TilesGalleryTemplate: React.FC<TilesGalleryProps> = ({
  section,
}) => {
  const { title, images } = section

  return (
    <>
      <MediaQueryWrapper
        defaultStyles="display: none;"
        mediaStyles="display: block;"
      >
        <SectionWrapper id={title}>
          {title && <SectionTitle>{title}</SectionTitle>}
          <DesktopTilesGalleryTemplate images={images} />
        </SectionWrapper>
      </MediaQueryWrapper>
      <MediaQueryWrapper
        defaultStyles="display: block;"
        mediaStyles="display: none;"
      >
        <SectionWrapper isGlued id={title}>
          <MobileTilesGalleryTemplate images={images} title={title} />
        </SectionWrapper>
      </MediaQueryWrapper>
    </>
  )
}
