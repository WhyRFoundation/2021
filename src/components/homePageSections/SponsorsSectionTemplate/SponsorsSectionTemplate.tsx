import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../UI/SectionTitle'
import { SectionWrapper } from '../../UI/SectionWrapper'
import { LazyElement } from '../../Utils/LazyElement'

interface SponsorsSectionTemplateProps {
  section: SectionProps
}

interface SectionProps {
  title?: string
  sponsors: Sponsors[]
}

type Sponsors = {
  rank: string
  images: Images[]
}

interface Images {
  title: string
  imgUrl: string
  linkUrl: string
  isLazy?: boolean
}

const COLOR_MAP = {
  platinium: '#888',
  gold: '#cea128',
  silver: 'silver',
  bronze: '#654321',
  organizations: '#fff',
}

export const SponsorsSectionTemplate: React.FC<SponsorsSectionTemplateProps> = ({
  section,
}) => {
  const { title, sponsors } = section
  return (
    <SectionWrapper id={title}>
      <SectionTitle>{title}</SectionTitle>
      {sponsors.map(sponsor => {
        return (
          <div key={sponsor.rank}>
            <Subtitle rank={sponsor.rank}>{sponsor.rank}</Subtitle>
            <ImagesWrapper rank={sponsor.rank.toLocaleLowerCase()}>
              {sponsor.images.map(image => (
                <LazyElement isLazy={image.isLazy} key={image.title}>
                  <StyledLink href={image.linkUrl} target="_blank">
                    <StyledImg src={image.imgUrl} alt={image.title} />
                  </StyledLink>
                </LazyElement>
              ))}
            </ImagesWrapper>
          </div>
        )
      })}
    </SectionWrapper>
  )
}

const ImagesWrapper = styled.div<{ rank: string }>`
  display: flex;
  flex-direction: ${props => (props.rank === 'platinium' ? 'column' : 'row')};
  justify-content: ${props =>
    props.rank === 'platinium' ? 'center' : 'space-around'};
  align-items: center;
  flex-wrap: wrap;
  border: 0.3em solid;
  border-radius: 0.1em;
  border-color: ${props =>
    COLOR_MAP[props.rank] ? COLOR_MAP[props.rank] : '#fff'};
`

const StyledLink = styled.a`
  cursor: pointer;
  max-width: 400px;
  transform: scale(1);
  transition: all 0.2s ease-in-out;
  margin: 1em;

  &:hover {
    opacity: 0.85;
    transform: scale(1.02);
  }
`

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`

const Subtitle = styled.p<{ rank: string }>`
  text-align: center;
  font-size: 1.8em;
  font-weight: 300;
  color: ${props => (COLOR_MAP[props.rank] ? COLOR_MAP[props.rank] : '#eee')};
  margin: 1em auto;
  font-weight: 700;
  text-transform: capitalize;
`
