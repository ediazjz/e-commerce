import Stripe from "stripe"
import { getSession } from "@auth0/nextjs-auth0"

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)

export default async function processCheckout(req, res) {
  const authSession = getSession(req, res)
  const stripeId =
    authSession?.user[`${process.env.BASE_URL}/stripe_customer_id`]

  console.log(authSession)

  if (stripeId) {
    if (req.method === "POST") {
      try {
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          customer: stripeId,
          payment_method_types: ["card"],
          shipping_address_collection: {
            allowed_countries: ["MX"],
          },
          allow_promotion_codes: true,
          line_items: req.body.map((item) => ({
            price_data: {
              currency: "mxn",
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
            },
            quantity: item.quantity,
          })),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/`,
        })

        res.status(200).json({ session })
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message)
      }
    } else {
      res.setHeader("Allow", "POST")
      res.status(405).end("Method Not Allowed")
    }
  } else {
    if (req.method === "POST") {
      try {
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          payment_method_types: ["card"],
          shipping_address_collection: {
            allowed_countries: ["MX"],
          },
          allow_promotion_codes: true,
          line_items: req.body.map((item) => ({
            price_data: {
              currency: "mxn",
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
            },
            quantity: item.quantity,
          })),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/`,
        })

        res.status(200).json({ session })
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message)
      }
    } else {
      res.setHeader("Allow", "POST")
      res.status(405).end("Method Not Allowed")
    }
  }
}
