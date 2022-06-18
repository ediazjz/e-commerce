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

  console.log(content)
  return (
    <div className="relative">
       
      <Image
        src={image.data.attributes.formats.small.url}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h2>{title}</h2>
      <span>{price}</span>
      <Link href={`/products${slug}`}>
        <a>Check it out</a>
      </Link>
    </div>
  )
}
