import SharedCartBtn from '../../AllComponents/sharedComponent/SharedCartBtn'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import news_2 from '../../../assets/images/news-bg-2.jpg'
import news_1 from '../../../assets/images/news-bg-1.jpg'
import news_3 from '../../../assets/images/news-bg-3.jpg'
import SharedBtn from '../../AllComponents/sharedComponent/SharedButton'
import { useNavigate } from 'react-router-dom'

const product = {
  name: 'Fruits & Vegitabels',

  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Fruits', href: '#' },
    { id: 2, name: 'Vegetables', href: '#' },
  ],
  images: [
    {
      src: news_1,
    },
    {
      src: news_2,
    },
    {
      src: news_3,
    },
    {
      src: news_3,
    },
  ],
}

//

export default function OverView({ card, bttn }) {
  const navigate = useNavigate()
  const btn = {
    title: 'Go To Back',
  }
  const cardbtn = {
    title: 'Add to Cart',
    icon: (
      <ShoppingCartOutlinedIcon
        style={{ fontSize: 20, marginRight: '10px', lineHeight: 'normal' }}
      />
    ),
  }
  console.log('H')
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div
            className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
            onClick={() => navigate(-1)}
          >
            <SharedBtn bttn={btn} />
          </div>

          {/* Options */}
          <div className=" lg:row-span-3 lg:mt-0">
            <form className=" text-right">
              <SharedCartBtn btn={cardbtn} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
