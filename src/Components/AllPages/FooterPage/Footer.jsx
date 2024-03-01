import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

const Footer = () => {
  const solutions = [
    { label: 'Marketing', href: '#' },
    { label: 'Analytics', href: '#' },
    { label: 'Commerce', href: '#' },
    { label: 'Insights', href: '#' },
  ]

  const support = [
    { label: 'Pricing', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Guides', href: '#' },
    { label: 'API Status', href: '#' },
  ]

  const company = [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Jobs', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Partners', href: '#' },
  ]

  const legal = [
    { label: 'Claim', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ]

  return (
    <footer className="bg-[#f5f5f5] " aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto  max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/">
              <img className="h-15 w-40 " src={logo} alt="ECommerce" />
            </Link>
            <p className="text-lg font-bold leading-6 text-orange-500">
              Let's Buy Your Dreams
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-orange-500">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {solutions.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-orange-500">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {support.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6  text-orange-500">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {company.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6  text-orange-500">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {legal.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5  text-orange-500">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
