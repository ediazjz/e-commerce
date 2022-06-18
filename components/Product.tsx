import { FunctionComponent } from "react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  content: {
    image: any
    price: number
    slug: string
    title: string
  }
}

export const Product: FunctionComponent<Product> = ({ content }) => {
  const { image, price, slug, title } = content

  // .card {
  //   margin: 1rem;
  //   padding: 1.5rem;
  //   text-align: left;
  //   color: inherit;
  //   text-decoration: none;
  //   border: 1px solid #eaeaea;
  //   border-radius: 10px;
  //   transition: color 0.15s ease, border-color 0.15s ease;
  //   max-width: 300px;
  // }

  // .card:hover,
  // .card:focus,
  // .card:active {
  //   color: #0070f3;
  //   border-color: #0070f3;
  // }

  return (
    <section className="mb-4 w-full rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 ease-in hover:border-gray-400 hover:shadow-lg">
      <div className="relative -mx-4 -mt-4 mb-4 h-64">
        <Image
          src={image.data.attributes.formats.small.url}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-t-lg"
        />
      </div>

      <h1 className="h4">{title}</h1>

      <div className="flex items-end justify-between">
        <h2 className="h6">$ {price}</h2>

        <Link href={`/products/${slug}`}>
          <a className="hover:text-blue-600 hover:underline hover:decoration-solid">
            Check it out
          </a>
        </Link>
      </div>
    </section>
  )
}
