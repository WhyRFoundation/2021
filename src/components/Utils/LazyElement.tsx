import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

interface LazyElementProps {
  isLazy?: boolean
  className?: string
}

export const LazyElement: React.FC<LazyElementProps> = ({
  children,
  isLazy = false,
  className,
}) => {
  if (!isLazy) {
    return <DefaultWrapper className={className}>{children}</DefaultWrapper>
  }

  const [elementRef, setElementRef] = useState<Element>()
  const [isVisible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    let observer
    let didCancel = false

    if (elementRef) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                entry.intersectionRatio > 0.05 &&
                entry.isIntersecting
              ) {
                setVisible(true)
                observer.unobserve(elementRef)
              }
            })
          },
          {
            threshold: 0.5,
            rootMargin: '25%',
          }
        )
        observer.observe(elementRef)
      } else {
        setVisible(true)
      }
    }

    return () => {
      didCancel = true

      if (observer && observer.unobserve) {
        observer.unobserve(elementRef)
      }
    }
  }, [elementRef, isVisible])

  return (
    <Wrapper className={className} ref={setElementRef} isVisible={isVisible}>
      {isVisible && children}
    </Wrapper>
  )
}

const DefaultWrapper = styled.span``

const Wrapper = styled.span<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.1s ease-in;
`
