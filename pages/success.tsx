import { NextPage } from "next"
import Link from "next/link"

const { motion } = require("framer-motion")

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export const getServerSideProps = async ({ query }: any) => {
  const order = await stripe.checkout.sessions.retrieve(query.session_id, {
    expand: ["line_items"],
  })

  return {
    props: {
      order,
    },
  }
}

interface ISuccess {
  order: any
}

const Success: NextPage<ISuccess> = ({ order }) => {
  console.log(order)
  return (
    <motion.div
      className="container py-8"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-xl">
        <h1>Thank you for your order!</h1>
        <p>
          A confirmation email has been sent to {order.customer_details.email}
        </p>

        <div className="mt-12 flex flex-col md:mb-12 md:flex-row md:text-left">
          <div className="mb-8 w-full md:mb-0">
            <h2>Address</h2>
            <p className="mb-8">
              {order.customer_details.address.line1}
              <br />
              {order.customer_details.address.city},{" "}
            </p>

            <p>
              {order.customer_details.address.city},{" "}
              {order.customer_details.address.state},{" "}
              {order.customer_details.address.country}
              <br />
              ZIP code: ({order.customer_details.address.postal_code})
            </p>
          </div>

          <div className="mb-16">
            <h2>Products</h2>
            <ul>
              {order.line_items.data.map((item: any) => (
                <li key={item.id}>
                  <p>
                    {item.quantity} x {item.description} ( ${" "}
                    {item.price.unit_amount / 100} USD)
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link href="/">
          <a className="btn btn-primary">Continue shopping</a>
        </Link>
      </div>
    </motion.div>
  )
}

export default Success
