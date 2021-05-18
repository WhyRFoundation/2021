import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import LogoImg from '../../../content/assets/whyr_logo2020.png'
import { useStaticQuery, graphql } from 'gatsby'

export interface HeroProps {
  title?: string
  subtitle?: string
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const { mobileImage, desktopImage, bigDesktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "whyr-big-bg.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopImage: file(relativePath: { eq: "whyr-big-bg.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1700, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bigDesktopImage: file(relativePath: { eq: "whyr-big-bg.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 2400, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...bigDesktopImage.childImageSharp.fluid,
      media: `(min-width: 1699px)`,
    },
  ]

  return (
    <Wrapper>
      <BgImage fluid={sources} />
      <Content>
        <Logo src={LogoImg} alt="whyrConf logo" />
        <TextBar>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </TextBar>
      </Content>
      <Overlay />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const BgImage = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: #f8f9fa;
  text-align: center;
  width: 100%;
`

const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  transform: translate(0, 29.1%);
  z-index: 0;
  @media screen and (max-width: 768px) {
    max-width: 200px;
    transform: translate(0, 30%);
  }
`

const TextBar = styled.div`
  width: 100%;
  text-align: center;
  background-color: rgba(${props => props.theme.secondaryColorRGB}, 0.7);
  z-index: 1;
  position: relative;
  padding: 1em 0 2em 0;

  @media screen and (max-width: 768px) {
    padding: 1em 0 1em 0;
  }
`

const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 2em;
    line-height: 1em;
  }
`

const Subtitle = styled.p`
  font-size: 2em;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.3em;
    line-height: 1.6em;
  }
`

const Overlay = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(${props => props.theme.secondaryColorRGB}, 0.2);
`
