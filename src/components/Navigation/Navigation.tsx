import React, { useState, useLayoutEffect, useCallback } from 'react'
import styled, { css } from 'styled-components'

import { scrollToHandler } from '../Utils/scrollUtils'
import { NavigationLink } from './NavigationLink'
import { TiTicket } from 'react-icons/ti'
import { MdSpeakerNotes } from 'react-icons/md'

export const Navigation: React.FC<{}> = () => {
  const [fillNav, setFillNav] = useState<boolean>(false)
  const [animationFrameStatus, setAnimationFrameStatus] = useState<boolean>(
    false
  )

  const changeScrollBarHandler = useCallback(() => {
    if (animationFrameStatus) {
      setAnimationFrameStatus(false)
    }

    if (window && window.pageYOffset > 400 && !fillNav) {
      setFillNav(true)
    } else {
      setFillNav(false)
    }
  }, [fillNav, animationFrameStatus])

  const handleScroll = useCallback(() => {
    if (!animationFrameStatus) {
      window.requestAnimationFrame(changeScrollBarHandler)
      setAnimationFrameStatus(true)
    }
  }, [animationFrameStatus])

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Wrapper fillNav={fillNav}>
      <StyledNav>
        <CtaNavButton href="https://app.evenea.pl/event/whyr2021/?lang=en" target="_blank">
          <CtaNavButtonText>Register</CtaNavButtonText>
          <StyledTicketIcon />
        </CtaNavButton>
        <CtaNavButton href="/youtube" target="_blank">
          <CtaNavButtonText>YouTube</CtaNavButtonText>
          <StyledSpeakerIcon />
        </CtaNavButton>
      </StyledNav>
      <StyledNav>
        <LinkWrapper>
          <NavigationLink onClick={() => scrollToHandler('About')}>
            About
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink onClick={() => scrollToHandler('2021 KEYNOTES')}>
            Speakers
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink onClick={() => scrollToHandler('GRANTS')}>
            GRANTS
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink onClick={() => scrollToHandler('WHY R? 2021 WEBINARS')}>
            WEBINARS
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink onClick={() => scrollToHandler('SPONSORS')}>
            SPONSORS
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink onClick={() => scrollToHandler('ORGANIZERS')}>
            ORGANIZERS
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink onClick={() => scrollToHandler('Code of Conduct')}>
            CODE OF CONDUCT
          </NavigationLink>
        </LinkWrapper>        
        <LinkWrapper>
          <NavigationLink
            path="http://whyr.pl/foundation/#blog"
            target="_blank"
            isExternal={true}
          >
            BLOG
          </NavigationLink>
        </LinkWrapper>
      </StyledNav>
    </Wrapper>
  )
}

interface NavigationWrapperProps {
  fillNav: boolean
}

const Wrapper = styled.div<NavigationWrapperProps>`
  height: 4em;
  font-size: 1em;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  padding: 0 2em 0 0;
  ${({ fillNav }) =>
    fillNav &&
    css`
      background-color: ${props =>
        `rgba(${props.theme.secondaryColorRGB}, 0.9)`};
      color: #f8f9fa;
    `}
  transition: all 0.2s ease-in;
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`
const LinkWrapper = styled.li`
  padding-left: 1.5em;
  display: inline-block;
`

const CtaNavButton = styled.a`
  color: ${props => props.theme.secondaryTextColor};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9em;
  text-transform: uppercase;
  background-image: linear-gradient(
    145deg,
    ${props => props.theme.primaryColor},
    ${props => props.theme.secondaryColor}
  );
  background-position: 100%;

  text-shadow: -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333,
    1px 1px 0 #333;
  font-weight: 700;
  border: 2px solid ${props => props.theme.primaryColor};
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in;
  background-position: 90%;
  background-size: 200%;
  &:hover {
    background-position: 0;
  }

  :first-of-type {
    border-right: none;
  }

  @media (max-width: 1024px) {
    font-size: 0.75em;
  }

  @media (max-width: 881px) {
    display: none;
  }
`

const CtaNavButtonText = styled.span`
  z-index: 1;
`

const StyledTicketIcon = styled(TiTicket)`
  font-size: 3.3em;
  position: absolute;
  transform: translate(-40px, 0px);
  z-index: 0;

  @media (max-width: 1024px) {
    transform: translate(-20px, 0px);
  }
`

const StyledSpeakerIcon = styled(MdSpeakerNotes)`
  font-size: 3em;
  position: absolute;
  transform: translate(-40px, 0px) rotate(-45deg);
  z-index: 0;
  @media (max-width: 1024px) {
    transform: translate(-20px, 0px) rotate(-45deg);
  }
`
