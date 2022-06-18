import type { NextPage } from "next"

import { useQuery } from "urql"

import { Product } from "../components"
import { GET_PRODUCTS } from "../lib/queries"

const Home: NextPage = () => {
  const [{ data, fetching, error }] = useQuery({ query: GET_PRODUCTS })

  const products = data?.products.data

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-blue-400">
      {fetching ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="text-white">
          {products.map((product) => (
            <Product
              key={product.attributes.slug}
              content={product.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Home
