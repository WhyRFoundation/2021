import React from 'react'
import styled, { css } from 'styled-components'

import { scrollToHandler } from '../Utils/scrollUtils'
import { NavigationIcon } from './NavigationIcon'
import { NavigationLink } from './NavigationLink'

import whyrLogo from '../../../content/assets/whyrnieb-white.png'

interface MobileNavigationProps {
  toggleHandler: () => void
  isOpen: boolean
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  toggleHandler,
  isOpen,
}) => {
  return (
    <Wrapper isOpen={isOpen}>
      <NavigationBar>
        <NavigationLink path="/">
          <LogoLink src={whyrLogo} />
        </NavigationLink>
        <NavigationIcon isOpen={isOpen} onClick={toggleHandler} />
      </NavigationBar>
      <LeftSideMenu isOpen={isOpen}>
        <LinkWrapper>
          <MobileStyledLink isExternal path="http://whyr.pl/foundation/#blog">
            BLOG
          </MobileStyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <MobileStyledLink onClick={() => scrollToHandler('Agenda')}>
            Agenda
          </MobileStyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <MobileStyledLink onClick={() => scrollToHandler('About')}>
            About
          </MobileStyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <MobileStyledLink onClick={() => scrollToHandler('2021 KEYNOTES')}>
            Speakers
          </MobileStyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <MobileStyledLink onClick={() => scrollToHandler('GRANTS')}>
            GRANTS
          </MobileStyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <MobileStyledLink onClick={() => scrollToHandler('SPONSORS')}>
            SPONSORS
          </MobileStyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <MobileStyledLink onClick={() => scrollToHandler('ORGANIZERS')}>
            ORGANIZERS
          </MobileStyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <MobileStyledLink onClick={() => scrollToHandler('Code of Conduct')}>
            CODE OF CONDUCT
          </MobileStyledLink>
        </LinkWrapper>
      </LeftSideMenu>
    </Wrapper>
  )
}

interface NavigationWrapperProps {
  isOpen: boolean
}

const Wrapper = styled.div<NavigationWrapperProps>`
  position: fixed;
  width: 100%;
  z-index: 99;
  padding: 0 2em;
  background-color: ${props => `rgba(${props.theme.secondaryColorRGB}, 0.8)`};
`

const NavigationBar = styled.div`
  color: #f8f9fa;
  height: 4em;
  font-size: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftSideMenu = styled.ul<{ isOpen: boolean }>`
  transition: left 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: absolute;
  height: 100vh;
  left: -1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5em;
  ${({ isOpen }) =>
    isOpen &&
    css`
      z-index: 99;
      background-color: ${props =>
        `rgba(${props.theme.secondaryColorRGB}, 0.8)`};
      left: 0;
    `}
`

const MobileStyledLink = styled(NavigationLink)`
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  padding: 1em 1.5em;
  &:hover {
  }
`

const LinkWrapper = styled.li`
  width: 100%;
  height: 3.5em;
`

const LogoLink = styled.img`
  max-width: 3.3em;
  width: 100%;
  height: 100%;
  padding: 0.5em;
`
