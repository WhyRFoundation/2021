import React from 'react'
import Link from 'gatsby-link'

interface PaginationElementProps {
  text: string
  test: boolean
  url: string
}

export const PaginationElement: React.FC<PaginationElementProps> = ({
  text,
  url,
  test,
}) => {
  if (test) {
    return null
  } else {
    return <Link to={url}>{text}</Link>
  }
}
