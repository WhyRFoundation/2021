import React from 'react'
import styled from 'styled-components'

interface MediaQueryWrapperProps {
  defaultStyles: string
  mediaStyles: string
  breakpoint?: string
}

export const MediaQueryWrapper: React.FC<MediaQueryWrapperProps> = ({
  children,
  defaultStyles,
  mediaStyles,
  breakpoint = '768px',
}) => (
  <Wrapper
    defaultStyles={defaultStyles}
    mediaStyles={mediaStyles}
    breakpoint={breakpoint}
  >
    {children}
  </Wrapper>
)

const Wrapper = styled.span<MediaQueryWrapperProps>`
      ${({ defaultStyles }) => defaultStyles}

@media screen and (min-width: ${({ breakpoint }) => breakpoint}) {
    ${({ mediaStyles }) => mediaStyles}
}
`
