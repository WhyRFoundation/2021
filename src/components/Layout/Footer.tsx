import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MediaQueryWrapper } from '../UI/MediaQueryWrapper'
import { FooterNavigation } from '../Navigation/FooterNavigation'

export const Footer: React.FC<any> = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            footer {
              role
              people
              links
            }
          }
        }
      }
    `
  )

  const { footer } = site.siteMetadata

  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <CreatorsWrapper>
            © {new Date().getFullYear()} |{' '}
            {footer.map((element, index) => (
              <span key={element.role}>
                {element.role}:{' '}
                {element.people.map((person, personIndex) => {
                  if (element.links[personIndex])
                    return (
                      <PersonLink
                        key={`${element.role}${personIndex}`}
                        href={element.links[personIndex]}
                      >
                        {person}
                        {personIndex + 1 < element.links.length && ' & '}
                      </PersonLink>
                    )
                  else
                    return (
                      <span key={`${element.role}${personIndex}`}>
                        {person}
                        {personIndex + 1 < element.links.length && ' & '}
                      </span>
                    )
                })}
                {index + 1 < footer.length && ', '}
              </span>
            ))}
          </CreatorsWrapper>
        </ContentWrapper>
      </Wrapper>
      <MediaQueryWrapper
        defaultStyles="display: block;"
        mediaStyles="display: none;"
        breakpoint="881px"
      >
        <FooterNavigation />
      </MediaQueryWrapper>
    </>
  )
}

const Wrapper = styled.footer`
  text-align: center;
  margin: 1.5em;
  font-size: 0.9em;
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 12em;

  @media screen and (min-width: 767px) {
    margin-bottom: 0;
  }
`

const ContentWrapper = styled.div`
  border-top: 0.2em solid rgba(${props => props.theme.secondaryColorRGB}, 0.2);
  max-width: 980px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2em 0;
`

const CreatorsWrapper = styled.div``

const PersonLink = styled.a`
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${props => props.theme.primaryTextColor};
  }
`
