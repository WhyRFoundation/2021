import React, { useRef, useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import {
  createHistory,
  LocationProvider,
  createMemorySource,
} from '@reach/router'
import reset from 'styled-reset-advanced'

import { theme } from './theme'
import { Hero, HeroProps } from './Hero'
import { Navigation, MobileNavigation } from '../Navigation'
import { MediaQueryWrapper } from '../UI/MediaQueryWrapper'
import { Footer } from './Footer'

const GlobalStyle = createGlobalStyle`
  body {
    ${reset};
    box-sizing: border-box;
    font-family: 'Roboto', Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.04em;
    line-height: 1.65em;
    margin: 0;
    padding: 0;
    background: ${props => (props.theme === 'purple' ? 'purple' : 'white')};
    

    h1,h2,h3,h4,h5,h6 {
      letter-spacing: 0.03em;
      line-height: 1.65em;
      margin: 0;
      padding: 0;
      font-family:'Montserrat', sans-serif !important;
    }

    p, h1,h2,h3,h4,h5,h6, figure, figcaption,a, button, li, nav, header, div {
      font-family: 'Roboto', Helvetica, sans-serif;
    }


    @media screen and (min-width: 767px) {
      font-size: 16px;
    }
  }
`

const source = createMemorySource('/')
const history = createHistory(source)

interface LayoutInterface extends HeroProps {}

export const Layout: React.FC<LayoutInterface> = ({
  title,
  subtitle,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const heroRef = useRef<HTMLDivElement>(null)

  const NavToggleHandler = () => {
    setIsOpen(!isOpen)
  }

  const titleText = title || 'Why R? 2020 Conference'
  const subtitleText = subtitle || 'youtube.com/WhyRFoundation, 24-27.09'

  return (
    <LocationProvider history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme="" />

        <Wrapper>
          <>
            <MediaQueryWrapper
              defaultStyles="display: none;"
              mediaStyles="display: block;"
            >
              <Navigation />
            </MediaQueryWrapper>
            <MediaQueryWrapper
              defaultStyles="display: block;"
              mediaStyles="display: none;"
            >
              <MobileNavigation
                toggleHandler={NavToggleHandler}
                isOpen={isOpen}
              />
            </MediaQueryWrapper>
          </>
          <span ref={heroRef}>
            <Hero title={titleText} subtitle={subtitleText} />
          </span>
          <PageContent>{children}</PageContent>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </LocationProvider>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto auto auto 6.25em;
`

const PageContent = styled.main`
  width: 100%;
  margin: 32px auto;
  min-height: 150vh;
  height: 100%;
`
