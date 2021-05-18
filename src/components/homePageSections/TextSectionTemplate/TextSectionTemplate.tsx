import React from 'react'
import { MdContent } from '../../MdContent'
import { SectionTitle } from '../../UI/SectionTitle'
import { SectionWrapper } from '../../UI/SectionWrapper'

interface TextSectionTemplateProps {
  section: SectionProps
}

interface SectionProps {
  title?: string
  content?: string
}

export const TextSectionTemplate: React.FC<TextSectionTemplateProps> = ({
  section,
}) => {
  const { title, content } = section
  return (
    <SectionWrapper id={title}>
      {title && <SectionTitle>{title}</SectionTitle>}
      <MdContent md={content} />
    </SectionWrapper>
  )
}
