import type { AppProps } from "next/app"

import { createClient, Provider } from "urql"

import { Layout } from "../components"
import { CartProvider, QuantityProvider } from "../lib/contexts"

import "../styles/globals.css"

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_GRAPHQL_ENDPOINT!,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <QuantityProvider>
        <Layout>
          <Provider value={client}>
            <Component {...pageProps} />
          </Provider>
        </Layout>
      </QuantityProvider>
    </CartProvider>
  )
}

export default MyApp
