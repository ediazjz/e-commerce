import type { NextPage } from "next"

import { useQuery } from "urql"

import { Product } from "../components"
import { GET_PRODUCTS } from "../lib/queries"

const Home: NextPage = () => {
  const [{ data, fetching, error }] = useQuery({ query: GET_PRODUCTS })

  const products = data?.products.data

  return (
    <main className="container flex h-screen w-screen flex-col items-center justify-center">
      {fetching ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <h1>Products</h1>

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Product
                key={product.attributes.slug}
                content={product.attributes}
              />
            ))}
          </div>
        </>
      )}
    </main>
  )
}

export default Home
