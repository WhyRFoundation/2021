import React from 'react'
import styled from 'styled-components'

export interface TileItemProps {
  linkUrl: string
  imgUrl: string
  title: string
  col: number
}

const generateGrid = col => {
  switch (col) {
    case 1:
      return ` grid-column: span 2;`
    case 3:
      return `grid-row: span 2;`
    default:
      break
  }
}

export const TileItem: React.FC<TileItemProps> = ({
  linkUrl,
  imgUrl,
  title,
  col,
}) => (
  <GridItem col={col}>
    {imgUrl ? (
      <>
        <GridImage id="gridImage">
          <StyledImg src={imgUrl} />
        </GridImage>
        <GridItemText id="gridItemText">
          <GridItemTextWrapper>
            <GridItemTitle>{title}</GridItemTitle>
          </GridItemTextWrapper>
        </GridItemText>
        <GridItemLink href={linkUrl} />
      </>
    ) : (
      <>
        <GridImage id="emptyGridImage">
          <EmptyBox>
            <GridItemTextWrapper>
              <GridItemTitle>{title}</GridItemTitle>
            </GridItemTextWrapper>
          </EmptyBox>
        </GridImage>
        <GridItemText id="gridItemText">
          <GridItemTextWrapper>
            <GridItemTitle>{title}</GridItemTitle>
          </GridItemTextWrapper>
        </GridItemText>
        <GridItemLink href={linkUrl} />
      </>
    )}
  </GridItem>
)

const StyledImg = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  max-width: 100%;
  height: 100%;
`

const EmptyBox = styled.div`
  max-width: 100%;
  height: 100%;
  background: ${props => props.theme.primaryColor};
`

const GridItem = styled.div<{ col: number }>`
  position: relative;
  ${props => generateGrid(props.col)}
  background-color: ${props => props.theme.secondaryColor};
  overflow: hidden;
  &:after {
    content: '';
    display: block;
    background-color: inherit;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(2) translateX(-75%) translateY(-75%) translateZ(0)
      rotate(-28deg);
    transition: transform 3s cubic-bezier(0.23, 1, 0.32, 1);
  }
  &:hover {
    &:after {
      transform: scale(2) translateX(0%) translateY(0%) translateZ(0)
        rotate(-28deg);
    }

    #gridImage {
      transform: scale(1.2) translateZ(0);
    }

    #emptyGridImage {
      transform: translateZ(0);
    }

    #gridItemText {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const GridImage = styled.div`
  height: auto;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 750ms cubic-bezier(0.23, 1, 0.32, 1);
  width: 100%;
  height: 100%;
`

const GridItemText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  text-align: center;
  z-index: 1;
  color: #ffffff;
  transition: opacity 500ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  transition-delay: 300ms;
  transform: translateY(-20%);
`

const GridItemTextWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const GridItemTitle = styled.h6`
  font-weight: 700;
  font-size: 1em;
  padding: 0 0.9em;
  margin: 0.3em 0 0 0;
`

const GridItemLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
`
