import algoliasearch from 'algoliasearch/lite'
import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Configure,
} from 'react-instantsearch-dom'

import { Hit } from '~/components/Hit'
import SEO from '~/components/seo'

const appId = process.env.GATSBY_ALGOLIA_APP_ID
const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY
const indexName = process.env.ALGOLIA_INDEX_NAME

const SecondPage = () => {
  const searchClient = useMemo(() => algoliasearch(appId, searchKey), [])
  const perPage = 8

  return (
    <>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <div>
          <Configure hitsPerPage={perPage} />
          <SearchBox />
          <Hits hitComponent={Hit} />
          <Pagination />
        </div>
      </InstantSearch>

      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export default SecondPage
