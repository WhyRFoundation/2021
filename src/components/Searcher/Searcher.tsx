import React, { useMemo, useState } from 'react'
import { Link } from 'gatsby'
import { Index } from 'elasticlunr'
import { graphql, useStaticQuery } from 'gatsby'

interface SearchResult {
  id: string
  title: string
  slug: string
  pagePrefixPath: string | null
}

export const createSearchLink = ({
  slug,
  pagePrefixPath,
}: Pick<SearchResult, 'slug' | 'pagePrefixPath'>): string => {
  if (pagePrefixPath) {
    return `/${pagePrefixPath}/${slug}`
  }

  return slug
}

export const Searcher: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const [results, setResults] = useState<ReadonlyArray<SearchResult>>([])

  const data = useStaticQuery(graphql`
    query SearchIndexQuery {
      siteSearchIndex {
        index
      }
    }
  `)

  const index = useMemo(() => Index.load(data.siteSearchIndex.index), [data])

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => {
          const query = e.target.value
          setQuery(query)
          setResults(
            index
              .search(query, {})
              .map(({ ref }: { ref: any }) => index.documentStore.getDoc(ref))
          )
        }}
      />
      <ul>
        {results.map(page => (
          <li key={page.id}>
            {console.log(page)}
            {page.slug !== null ? (
              <Link
                to={createSearchLink({
                  slug: page.slug,
                  pagePrefixPath: page.pagePrefixPath,
                })}
              >
                {page.title}
              </Link>
            ) : (
              page.title
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
