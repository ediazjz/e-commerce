import { FunctionComponent } from "react"
import Link from "next/link"

import { ShoppingBagIcon } from "@heroicons/react/solid"
const { AnimatePresence } = require("framer-motion")

import { Cart } from "./Cart"
import { UserIcon } from "./UserIcon"
import { useCart } from "../lib/contexts"

export const Navbar: FunctionComponent = () => {
  const { isCartOpen, toggleCart, totalQuantity } = useCart()
  return (
    <div className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <a className="btn btn-ghost">Home</a>
        </Link>

        <div className="flex">
          <UserIcon />

          <div className="flex flex-col items-center">
            <ShoppingBagIcon
              onClick={toggleCart}
              className={totalQuantity > 0 ? `h-6 w-6` : `h-8 w-8`}
            />

            {totalQuantity > 0 && <span>{totalQuantity}</span>}
          </div>
        </div>

        <AnimatePresence>{isCartOpen && <Cart />}</AnimatePresence>
      </div>
    </div>
  )
}
