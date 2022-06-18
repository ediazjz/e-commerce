import { gql } from "urql"

export const GET_PRODUCT = gql`
  query getProduct($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          description
          slug
          price
          image {
            data {
              attributes {
                formats
                url
              }
            }
          }
        }
      }
    }
  }
`
