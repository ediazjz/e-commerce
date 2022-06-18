import { FunctionComponent } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import { useQuery } from "urql"
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid"

import { GET_PRODUCT } from "../../lib/queries"

const ProductDetails: FunctionComponent = () => {
  const { query } = useRouter()

  const [{ data, fetching, error }] = useQuery({
    query: GET_PRODUCT,
    variables: { slug: query.slug },
  })

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  const { title, description, price, image } = data?.products.data[0].attributes

  return (
    <div className="container flex flex-wrap py-8">
      <div className="relative mb-6 h-full max-h-96 min-h-[24rem] w-full lg:mb-0 lg:w-1/2 lg:pr-6">
        <Image
          src={image.data.attributes.url}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="w-full lg:w-1/2 lg:pl-6">
        <h1 className="h1 mb-2">{title}</h1>
        <p>{description}</p>

        <div className="mt-10">
          <div className="flex w-full items-end justify-between">
            <span className="h3">$ {price}</span>
            <span>Stock</span>
          </div>

          <div className="mt-4 flex w-full items-center justify-between">
            <button className="">
              <MinusCircleIcon className="h-8 w-8 transition-all duration-200 ease-linear hover:text-blue-600" />
            </button>
            <span>Cantidad</span>
            <button>
              <PlusCircleIcon className="h-8 w-8 transition-all duration-200 ease-linear hover:text-blue-600" />
            </button>
          </div>
        </div>

        <button className="btn btn-primary mt-8 w-full">Add to cart</button>
      </div>
    </div>
  )
}

export default ProductDetails
