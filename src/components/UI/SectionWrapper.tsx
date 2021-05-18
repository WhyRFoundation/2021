import React from 'react'
import styled from 'styled-components'

interface SectionWrapperProps {
  isGlued?: boolean
  id?: string
  className?: string
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  isGlued,
  id,
  className,
}) => (
  <Wrapper isGlued={isGlued} id={id} className={className}>
    {children}
  </Wrapper>
)

const Wrapper = styled.section<Pick<SectionWrapperProps, 'isGlued'>>`
  margin: 0 auto;
  max-width: 980px;
  padding: 2em ${props => (!props.isGlued ? '2em' : '0em')};
  text-align: center;
`
