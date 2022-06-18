import { FunctionComponent } from "react"
import Link from "next/link"
import { ShoppingBagIcon } from "@heroicons/react/solid"

export const Navbar: FunctionComponent = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <a className="btn btn-ghost">Home</a>
        </Link>

        <ShoppingBagIcon className="h-8 w-8" />
      </div>
    </div>
  )
}
