import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid"
import Image from "next/image"

const { motion } = require("framer-motion")

import { useCart } from "../lib/contexts"

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

const cardListVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.15,
    },
  },
}

export const Cart = () => {
  const { cartItems, toggleCart, addItem, removeItem, totalPrice } = useCart()

  return (
    <motion.aside
      onClick={toggleCart}
      className="fixed top-0 left-0 right-0 z-[100] flex h-screen w-full justify-end bg-black bg-opacity-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e: Event): void => e.stopPropagation()}
        className="lg:12 relative w-4/5 overflow-y-scroll bg-slate-100 py-4 px-8 md:w-3/5 md:px-10 lg:w-2/5 lg:py-8 xl:px-16"
        initial={{ x: "50%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4, type: "tween" }}
        exit={{ x: "50%" }}
      >
        {cartItems.length < 1 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="h3">You got shopping to do</h1>
          </motion.div>
        ) : (
          <div>
            <h1 className="h3">Cart</h1>

            <hr className="my-4" />

            <motion.ul
              variants={cardListVariants}
              initial="hidden"
              animate="show"
              layout
            >
              {cartItems.map((item) => (
                <motion.div
                  key={item.slug}
                  className="mb-4 flex items-center justify-start overflow-hidden rounded-2xl bg-white p-4 md:p-6 lg:p-8"
                  variants={cardVariants}
                  layout
                >
                  <div className="relative mr-4 h-16 w-16 min-w-[4rem]">
                    <Image
                      src={item.image.data.attributes.formats.thumbnail.url}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>

                  <div className="flex grow justify-between ">
                    <span>
                      <h2 className="h5">{item.title}</h2>
                    </span>

                    <div className="flex flex-col items-end">
                      <span>$ {item.price}</span>

                      <div className="flex items-center">
                        <span>Quantity: </span>

                        <div className="ml-4 flex w-full items-center justify-between">
                          <button onClick={(): void => removeItem(item)}>
                            <MinusCircleIcon className="h-6 w-5 transition-all duration-200 ease-linear hover:text-blue-600" />
                          </button>
                          <span className="mx-2 mt-0.5">{item.quantity}</span>
                          <button onClick={(): void => addItem(item, 1)}>
                            <PlusCircleIcon className="h-6 w-5 transition-all duration-200 ease-linear hover:text-blue-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.ul>

            <motion.div layout>
              <h3 className="h5 my-8 text-right">Total: $ {totalPrice}</h3>
              <button className="btn btn-primary w-full">Purchase</button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </motion.aside>
  )
}
