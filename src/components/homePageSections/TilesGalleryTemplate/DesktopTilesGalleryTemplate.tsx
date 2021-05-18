import React from 'react'
import styled from 'styled-components'

import { TileItemProps, TileItem } from './TileItem'

interface TilesGalleryProps {
  images?: TileItemProps[]
}

export const DesktopTilesGalleryTemplate: React.FC<TilesGalleryProps> = ({
  images,
}) => {
  return (
    <ImagesGrid>
      {images.map((image, index) => (
        <TileItem
          key={`${image.title}${index}`}
          linkUrl={image.linkUrl}
          imgUrl={image.imgUrl}
          title={image.title}
          col={index + 1}
        />
      ))}
    </ImagesGrid>
  )
}

const ImagesGrid = styled.div`
  max-width: 980px;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 217px));
  grid-auto-rows: 170px;
  grid-gap: 1rem;
  grid-auto-flow: dense;
  text-align: center;
  justify-content: center;

  @media screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(auto, 217px));
    grid-auto-rows: 170px;
    grid-gap: 1rem;
  }
`
