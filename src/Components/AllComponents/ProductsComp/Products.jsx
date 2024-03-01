import Card from '../sharedComponent/Card'
import strawbery from '../../../assets/images/strawbery.jpg'
import grapes from '../../../assets/images/grapes.jpg'
import lemon from '../../../assets/images/lemon.jpg'
import '../ProductsComp/product.css'
import { DataToCart } from '../GlobalContextComp/GlobalContext'
import { useContext } from 'react'

const Products = () => {
  const { setAddData } = useContext(DataToCart)

  const fakeData = [
    {
      img: strawbery,
      title: 'Strawberry',
      kg: 'Kg',
      Price: '80$',
      desc: 'The strawberry, This are a good source of dietary fibre. ',
      action: 'Remove',
    },
    {
      img: grapes,
      title: 'Grapes',
      kg: 'Kg',
      Price: '60$',
      desc: 'The grapes, This are a good source of dietary fibre. ',
      action: 'Remove',
    },
    {
      img: lemon,
      title: 'Lemon',
      kg: 'Kg',
      Price: '50$',
      desc: 'The lemon, This are a good source of dietary fibre. ',
      action: 'Remove',
    },
  ]
  return (
    <>
      <div className="product-main">
        <div className="product-heading">
          <h3>
            {' '}
            <span style={{ color: '#F28123' }}>Our </span>Products
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            fuga quas itaque eveniet beatae optio.
          </p>
        </div>

        <div className="container product">
          {fakeData.map((data, index) => {
            return (
              <div
                onClick={() => {
                  setAddData((prev) => ({ ...prev, ...data }))
                }}
                key={index}
              >
                <Card card={data} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products
