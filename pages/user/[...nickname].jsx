import Head from "next/head"
import Link from "next/link"

import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0"

import formatMoney from "../../lib/formatMoney"

const stripe = require("stripe")(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const session = getSession(context.req, context.res)
    const stripeId = session?.user[`${process.env.BASE_URL}/stripe_customer_id`]

    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    })

    return {
      props: {
        orders: paymentIntents.data,
      },
    }
  },
})

const Profile = ({ user, orders }) => {
  console.log(orders)

  return (
    <>
      <Head>
        <title>My profile | Diaz Commerce</title>
      </Head>

      {user && (
        <div className="container py-8">
          <div className="mb-12">
            <h2>Hola {user.nickname}!</h2>
            <p>Logged in as: {user.email}</p>
          </div>

          <div>
            <h1>Past orders:</h1>

            {orders.map((order) => (
              <div
                key={order.id}
                className="mb-4 flex items-center justify-between rounded-lg bg-white p-4"
              >
                <h3 className="h6 w-1/2">Order number: {order.id}</h3>
                <span>{formatMoney(order.amount, "USD")} USD</span>

                <span>
                  Status:{" "}
                  {order.status === "succeeded"
                    ? "Paid"
                    : order.status === "canceled"
                    ? "Canceled"
                    : "Unpaid"}
                </span>
              </div>
            ))}
          </div>

          <Link href="/api/auth/logout">
            <a className="btn btn-secondary">Logout</a>
          </Link>
        </div>
      )}
    </>
  )
}

export default Profile
