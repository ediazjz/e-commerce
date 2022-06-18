import type { NextPage } from "next"

import { useQuery } from "urql"

import { GET_PRODUCTS } from "../lib/queries"

const Home: NextPage = () => {
  const [{ data, fetching, error }] = useQuery({ query: GET_PRODUCTS })

  if (!fetching && !error) {
    console.log(data)
  }

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-blue-400">
      <h1 className="text-white">Hello, e-commerce!</h1>
    </main>
  )
}

export default Home
