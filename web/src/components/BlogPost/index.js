import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Container } from '~/utils/styles'

const BlogPosts = () => {
  const { allSanityProduct } = useStaticQuery(
    graphql`
      query {
        allSanityProduct {
          edges {
            node {
              title
              slug {
                current
              }
              id
              defaultProductVariant {
                grams
                price
                sku
                taxable
                title
                barcode {
                  barcode
                  format
                }
                images {
                  asset {
                    fluid {
                      src
                    }
                  }
                }
              }
              tags
              vendor {
                title
              }
            }
          }
        }
      }
    `
  )
  return (
    <>
      <Container>
        {allSanityProduct.edges &&
          allSanityProduct.edges.map(item => {
            return <pre>{JSON.stringify(item, null, 2)}</pre>
          })}
      </Container>
    </>
  )
}

export default BlogPosts
