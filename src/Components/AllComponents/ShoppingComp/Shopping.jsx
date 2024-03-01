import React, { useContext } from 'react'
import strawbery from '../../../assets/images/strawbery.jpg'
import grapes from '../../../assets/images/grapes.jpg'
import lemon from '../../../assets/images/lemon.jpg'
import { DataToCart } from '../GlobalContextComp/GlobalContext'
import { Prev } from 'react-bootstrap/esm/PageItem'

export default function Shopping() {
  const { setAddData } = useContext(DataToCart)
  const products = [
    {
      id: 1,
      title: 'strawbery',
      // href: '#',
      img: strawbery,
      imageAlt: "Front of men's Basic Tee in black.",
      Price: '$35',
      action: 'Remove',
      desc: 'The strawberry, This are a good source of dietary fibre. ',
    },
    {
      id: 1,
      title: 'grapes',
      // href: '#',
      img: grapes,
      imageAlt: "Front of men's Basic Tee in black.",
      Price: '$35',
      action: 'Remove',
      desc: 'The strawberry, This are a good source of dietary fibre. ',
    },
    {
      id: 1,
      title: 'lemon',
      // href: '#',
      img: lemon,
      imageAlt: "Front of men's Basic Tee in black.",
      Price: '$35',
      action: 'Remove',
      desc: 'The strawberry, This are a good source of dietary fibre. ',
    },
    {
      id: 1,
      title: 'strawbery',
      // href: '#',
      img: strawbery,
      imageAlt: "Front of men's Basic Tee in black.",
      Price: '$35',
      action: 'Remove',
      desc: 'The strawberry, This are a good source of dietary fibre. ',
    },
  ]
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onClick={() => {
                setAddData((prev) => ({ ...prev, ...product }))
              }}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.img}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.Price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
