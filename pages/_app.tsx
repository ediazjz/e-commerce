import type { AppProps } from "next/app"

import { createClient, Provider } from "urql"

import { Layout } from "../components"

import "../styles/globals.css"

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_GRAPHQL_ENDPOINT!,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}

export default MyApp
