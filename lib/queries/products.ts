import { gql } from "urql"

export const GET_PRODUCTS = gql`
  query {
    products {
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
