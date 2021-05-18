import React from 'react'
import styled from 'styled-components'
import { TiTicket } from 'react-icons/ti'
import { MdSpeakerNotes } from 'react-icons/md'

export const FooterNavigation: React.FC<{}> = () => (
  <Wrapper>
    <CtaNavButton href="http://whyr.pl/" target="_blank">
      <CtaNavButtonText>Why R</CtaNavButtonText>
      <StyledTicketIcon />
    </CtaNavButton>
    <CtaNavButton href="/youtube" target="_blank">
      <CtaNavButtonText>YouTube</CtaNavButtonText>
      <StyledSpeakerIcon />
    </CtaNavButton>
  </Wrapper>
)

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99;
  background-color: ${props => `rgba(${props.theme.secondaryColorRGB}, 0.8)`};
  top: 100%;
  transform: translate(0, -100%);
  display: flex;
  align-items: center;
`

const CtaNavButton = styled.a`
  color: ${props => props.theme.secondaryTextColor};
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
`

const CtaNavButtonText = styled.span`
  z-index: 1;
`

const StyledTicketIcon = styled(TiTicket)`
  font-size: 3em;
  position: absolute;
  transform: translate(-40px, 0px);
  z-index: 0;
`

const StyledSpeakerIcon = styled(MdSpeakerNotes)`
  font-size: 2.7em;
  position: absolute;
  transform: translate(-40px, 0px) rotate(-45deg);
  z-index: 0;
`
