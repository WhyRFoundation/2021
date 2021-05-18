import React from 'react'
import styled from 'styled-components'

import { TileItemProps } from './TileItem'
import { SectionTitle } from '../../UI/SectionTitle'

interface TilesGalleryProps {
  images?: TileItemProps[]
  title?: string
}

export const MobileTilesGalleryTemplate: React.FC<TilesGalleryProps> = ({
  images,
  title,
}) => {
  return (
    <MobileWrapper>
      <MobileHeader>
        <SectionTitle>{title}</SectionTitle>
      </MobileHeader>
      <MobileTillsWrapper>
        <MobileInsideTillsWrapper>
          <MobileTillsList>
            {images.map((image, index) => (
              <MobileTillsItem key={`${image.title}${index}`}>
                <a href={image.linkUrl}>
                  {image.imgUrl ? (
                    <StyledImg src={image.imgUrl} />
                  ) : (
                    <EmptyItem>
                      <TileItemTitle>{image.title}</TileItemTitle>
                    </EmptyItem>
                  )}
                </a>
              </MobileTillsItem>
            ))}
          </MobileTillsList>
        </MobileInsideTillsWrapper>
      </MobileTillsWrapper>
    </MobileWrapper>
  )
}

const MobileWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  box-shadow: none;
  width: auto;
  padding: 0.9em 0 3em;
  border-radius: 0px;
  overflow: auto;
  background: ${props => props.theme.secondaryColor};
`

const MobileHeader = styled.header`
  position: relative;
  width: 100%;
  max-width: 420px;
  padding: 0px 1.2em;
`

const MobileTillsWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

const MobileInsideTillsWrapper = styled.div`
  transform: translateZ(0px);
  overflow: hidden;
  margin: 0;
  padding: 0;
`

const MobileTillsList = styled.div`
  max-width: none;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 0 1.1em;
  margin: 0;
  overflow: scroll hidden;
`

const MobileTillsItem = styled.div`
  display: inline-block;
  scroll-snap-align: center;
  vertical-align: top;
  white-space: initial;
  margin: 0 0.6em 0 0.6em;
  width: 100%;
  max-width: 232px;
`

const EmptyItem = styled.div`
  background: ${props => props.theme.primaryColor};
  height: 263px;
  box-shadow: none;
  margin: 0px auto;
  border-radius: 0.3em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TileItemTitle = styled.h6`
  font-weight: 700;
  font-size: 1.4em;
  padding: 0 1em;
  margin: 0.4em 0 0 0;
  color: ${props => props.theme.primaryTextColor};
`

const StyledImg = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  height: 263px;
  box-shadow: none;
  margin: 0px auto;
  border-radius: 0.3em;
  overflow: hidden;
  text-decoration: none;
`
