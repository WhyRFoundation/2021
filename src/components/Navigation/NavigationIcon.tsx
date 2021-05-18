import React from 'react'
import styled, { css } from 'styled-components'

interface NavigationIconProps {
  onClick: () => void
  isOpen: boolean
}

export const NavigationIcon: React.FC<NavigationIconProps> = ({
  isOpen = false,
  onClick,
}) => {
  return (
    <Wrapper onClick={onClick}>
      <Icon isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.a`
  cursor: pointer;
  padding: 10px 35px 16px 0px;
`
const Icon = styled.span<{ isOpen: boolean }>`
  cursor: pointer;
  border-radius: 1px;
  height: 5px;
  width: 35px;
  background: #f8f9fa;
  position: absolute;
  display: inline-block;
  content: '';
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:after,
  &:before {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: #f8f9fa;
    position: absolute;
    display: inline-block;
    content: '';
    transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:before {
    top: -10px;
  }

  &:after {
    bottom: -10px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: transparent;

      &:after,
      &:before {
        top: 0;
      }

      &:after {
        transform: translateY(-10px) rotate(-45deg);
        top: 10px;
      }
      &:before {
        transform: rotate(45deg);
      }
    `}
`
