import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useCart } from "../lib/contexts"

export const Cart = () => {
  const { cartItems, toggleCart, addItem, removeItem, totalPrice } = useCart()

  return (
    <aside
      onClick={toggleCart}
      className="fixed top-0 left-0 right-0 z-[100] flex h-screen w-full justify-end bg-black bg-opacity-40"
    >
      <div
        onClick={(e): void => e.stopPropagation()}
        className="lg:12 relative w-4/5 overflow-y-scroll bg-slate-100 py-4 px-8 md:w-3/5 md:px-10 lg:w-2/5 lg:py-8 xl:px-16"
      >
        {cartItems.length < 1 ? (
          <h1 className="h3">You got shopping to do</h1>
        ) : (
          <div>
            <h1 className="h3">Cart</h1>

            <hr className="my-4" />

            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.slug}
                  className="mb-4 flex items-center justify-start overflow-hidden rounded-2xl bg-white p-4 md:p-6 lg:p-8"
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
                </li>
              ))}
            </ul>

            <h3 className="h5 my-8 text-right">Total: $ {totalPrice}</h3>
            <button className="btn btn-primary w-full">Purchase</button>
          </div>
        )}
      </div>
    </aside>
  )
}
