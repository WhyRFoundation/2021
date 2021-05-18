import React from 'react'
import styled from 'styled-components'
import { MdContent } from '../../MdContent'
import { SectionTitle } from '../../UI/SectionTitle'
import { SectionWrapper } from '../../UI/SectionWrapper'
import { StyledImg } from '../../UI/StyledImg'
import { LazyElement } from '../../Utils/LazyElement'

import sectionBG from '../../../../content/assets/cloudBg.jpg'

interface SpeakersSectionTemplateProps {
  section: SectionProps
}

interface SectionProps {
  title?: string
  content?: string
  images?: Images[]
}

interface Images {
  imgUrl: string
  name: string
  role: string
  isLazy?: boolean
}

export const SpeakersSectionTemplate: React.FC<SpeakersSectionTemplateProps> = ({
  section,
}) => {
  const { title, content, images } = section
  return (
    <SectionBackground backgroundImg={sectionBG}>
      <SectionWrapper id={title}>
        {title && <SectionTitle>{title}</SectionTitle>}
        <MdContent md={content} />
        <ImageList centerList={images && images.length <= 3}>
          {images &&
            images.length > 0 &&
            images.map(image => (
              <ListItem key={image.name}>
                <ListItemContent>
                  <PersonPhotoWrapper isLazy={image.isLazy}>
                    <StyledImg
                      src={image.imgUrl}
                      alt={`${image.name} ${image.role}`}
                    />
                  </PersonPhotoWrapper>
                  <NameWrapper>{image.name}</NameWrapper>
                  {image.role && <RoleWrapper>{image.role}</RoleWrapper>}
                </ListItemContent>
              </ListItem>
            ))}
        </ImageList>
      </SectionWrapper>
    </SectionBackground>
  )
}

const SectionBackground = styled.div<{ backgroundImg: string }>`
  width: 100%;
  background-image: url(${props => props.backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const ImageList = styled.div<{ centerList: boolean }>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -19px;
  justify-content: ${props =>
    props.centerList ? 'space-around' : 'flex-start'};
`

const ListItem = styled.div`
  width: 50%;
  padding: 0 1em;
  margin-bottom: 3em;

  @media screen and (min-width: 767px) {
    width: 33%;
    margin-bottom: 5em;
  }
`
const ListItemContent = styled.div`
  position: relative;
  padding-bottom: 10px;
  z-index: 2;
  transform: scale();
  transition: all 0.2s ease-in-out;
  min-height: 21em;

  &:after {
    content: '';
    position: absolute;
    left: -10px;
    top: -10px;
    right: -10px;
    bottom: -10px;
    background: ${props => props.theme.secondaryColor};
    z-index: -1;
    opacity: 0.2;
  }

  &:hover {
    transform: scale(1.05);
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
  line-height: 1.3em;
`
