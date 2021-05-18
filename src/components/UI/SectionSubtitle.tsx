import React from 'react'
import styled from 'styled-components'

export const SectionSubtitle: React.FC<{}> = ({ children }) => (
  <Title>{children}</Title>
)

const Title = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.3em;
  color: ${props => props.theme.primaryHeaderColor};
`
