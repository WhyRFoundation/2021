import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { SectionTitle } from '../../UI/SectionTitle'
import { SectionWrapper } from '../../UI/SectionWrapper'
import { IndexPageQuery } from '../../../../types/graphql-types'

interface TableSectionTemplateProps {
  section: SectionProps
  body: IndexPageQuery['mdx']['body']
}

interface SectionProps {
  title?: string
}

export const TableSectionTemplate: React.FC<TableSectionTemplateProps> = ({
  section,
  body,
}) => {
  const { title } = section

  return (
    <Wrapper id={title}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {body && <MDXRenderer>{body}</MDXRenderer>}
    </Wrapper>
  )
}

const Wrapper = styled(SectionWrapper)`
  table {
    font-size: 0.75rem;
    border-collapse: separate;
    border-spacing: 0.2em;
    width: 100%;
    margin: 0 0 1rem;
    table-layout: fixed;
  }

  thead th {
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryHeaderColor};
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.4em;
    text-transform: uppercase;
  }

  tr {
    background: rgba(${props => props.theme.secondaryColorRGB}, 0.35);
    border-bottom: 1px solid #fff;
    margin-bottom: 5px;
  }

  tr:nth-child(even) {
    background: rgba(${props => props.theme.secondaryColorRGB}, 0.2);
  }

  th,
  td {
    text-align: left;
    padding: 20px;
    font-weight: 400;
    color: ${props => props.theme.primaryHeaderColor};
    font-family: ${props => props.theme.textFont};
    font-weight: 500;
    font-size: 1.1em;
  }

  tfoot tr {
    background: none;
  }

  tfoot td {
    padding: 10px 2px;
    font-size: 1em;
    font-style: italic;
    color: #8a97a0;
  }
`
