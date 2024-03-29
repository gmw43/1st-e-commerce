import React, { useState } from 'react'

const Contactus = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }
  const handleSave = (e) => {
    e.preventDefault()

    if (
      formData.email === '' &&
      formData.message === '' &&
      formData.subject === ''
    ) {
      alert('fill all')
      return
    } else {
      setFormData({
        email: '',
        message: '',
        subject: '',
      })
      // console.log(formData)
      // console.log(formData)
      alert('Your request is submitted')
    }
  }
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-800 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  handleChange(e)
                }}
                className="shadow-sm bg-orange-400 border border-gray-300 text-white text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => {
                  handleChange(e)
                }}
                className="block p-3 w-full text-md text-white bg-orange-400 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                onChange={(e) => {
                  handleChange(e)
                }}
                value={formData.message}
                className="block p-2.5 w-full text-md text-white bg-orange-400 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-orange-600  focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              onClick={(e) => {
                handleSave(e)
              }}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contactus
