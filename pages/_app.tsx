import { UserProvider } from "@auth0/nextjs-auth0"
import type { AppProps } from "next/app"

import { createClient, Provider } from "urql"
import { Toaster } from "react-hot-toast"

import { Layout } from "../components"
import { CartProvider, QuantityProvider } from "../lib/contexts"

import "../styles/globals.css"

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_GRAPHQL_ENDPOINT!,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <CartProvider>
        <QuantityProvider>
          <Layout>
            <Provider value={client}>
              <Toaster />
              <Component {...pageProps} />
            </Provider>
          </Layout>
        </QuantityProvider>
      </CartProvider>
    </UserProvider>
  )
}

export default MyApp
