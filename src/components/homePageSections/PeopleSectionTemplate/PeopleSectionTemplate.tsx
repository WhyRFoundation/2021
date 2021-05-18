import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { IoMdGlobe, IoLogoFacebook } from 'react-icons/io'

import { MdContent } from '../../MdContent'
import { SectionTitle } from '../../UI/SectionTitle'
import { SectionWrapper } from '../../UI/SectionWrapper'
import { StyledImg } from '../../UI/StyledImg'
import { LazyElement } from '../../Utils/LazyElement'

interface PeopleSectionTemplateProps {
  section: SectionProps
}

interface SectionProps {
  title?: string
  content?: string
  images?: Images[]
}

interface Images {
  alt: string
  imgUrl: string
  name: string
  role: string
  socials: Socials[]
  isLazy?: boolean
}

interface Socials {
  source: string
  sourceUrl: string
}

export const PeopleSectionTemplate: React.FC<PeopleSectionTemplateProps> = ({
  section,
}) => {
  const { title, content, images } = section

  const getSocialIcon = source => {
    switch (source) {
      case 'linkedin':
        return <FaLinkedin />
      case 'github':
        return <FaGithubSquare />
      case 'website':
        return <IoMdGlobe />
      case 'facebookc':
        return <IoLogoFacebook />
      default:
        break
    }
  }

  return (
    <SectionWrapper id={title}>
      {title && <SectionTitle>{title}</SectionTitle>}
      <MdContent md={content} />
      <PeopleList centerList={images.length <= 4}>
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <ListItem key={`${image.name}${index}`}>
              <Person>
                <PersonPhotoWrapper isLazy={image.isLazy}>
                  <StyledImg
                    src={image.imgUrl}
                    alt={`${image.name} ${image.role}`}
                  />
                </PersonPhotoWrapper>
                <NameWrapper>{image.name}</NameWrapper>
                {image.role && <RoleWrapper>{image.role}</RoleWrapper>}
                {image.socials && image.socials.length && (
                  <SocialsWrapper>
                    {image.socials.map((social, index) => (
                      <SocialLink
                        href={social.sourceUrl}
                        key={`${social.source}${index}`}
                      >
                        {getSocialIcon(social.source)}
                      </SocialLink>
                    ))}
                  </SocialsWrapper>
                )}
              </Person>
            </ListItem>
          ))}
      </PeopleList>
    </SectionWrapper>
  )
}

const PeopleList = styled.div<{ centerList: boolean }>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -19px;
  justify-content: ${props => (props.centerList ? 'center' : 'flex-start')};
`

const ListItem = styled.div`
  width: 50%;
  padding: 0 1em;
  margin-bottom: 3em;

  @media screen and (min-width: 767px) {
    width: 25%;
    margin-bottom: 5em;
  }
`

const Person = styled.div`
  position: relative;
  padding-bottom: 10px;

  &:after {
    content: '';
    position: absolute;
    left: -10px;
    top: -10px;
    right: -10px;
    bottom: -10px;
    background: ${props => props.theme.secondaryColor};
    z-index: -1;
    opacity: 0;
    transition: all ease 0.2s;
  }

  &:hover {
    &:after {
      opacity: 0.2;
    }
  }
`
const PersonPhotoWrapper = styled(LazyElement)`
  width: 100%;
  padding-top: 100%;
  position: relative;
  margin-bottom: 22px;
  overflow: hidden;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
`

const NameWrapper = styled.p`
  font-size: 1.4em;
  margin-bottom: 0.4em;
  overflow: hidden;
  text-overflow: ellipsis;
`

const RoleWrapper = styled.p`
  margin-bottom: 0.8em;
  font-size: 0.8em;
`

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialLink = styled.a`
  margin-right: 0.5em;

  > svg {
    transition: 0.3s;
    font-size: 1.25em;
    fill: #aaa;
  }

  &:hover {
    svg {
      fill: ${props => props.theme.primaryColor};
    }
  }
`
