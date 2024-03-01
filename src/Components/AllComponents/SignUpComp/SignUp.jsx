import React, { useEffect, useState } from 'react'
import { Link, json, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

const SignUp = () => {
  const location = useLocation()
  const navigateToHome = useNavigate()

  const [inputValue, setInputValue] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const getValue = (e) => {
    const { name, value } = e.target
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const submitt = (e) => {
    e.preventDefault()

    const { username, email, password, confirmPassword } = inputValue
    if (
      username.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      alert('All fields are required')
    } else if (password !== confirmPassword) {
      alert('Passwords do not match')
    } else {
      alert('User data has been submitted')
      let userData = JSON.parse(localStorage.getItem('user'))
      if (!userData) {
        userData = []
      }
      userData.push(inputValue)
      localStorage.setItem('user', JSON.stringify(userData))

      setInputValue({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    }
  }

  const checkSignIn = (e) => {
    e.preventDefault()
    const { email, password } = inputValue

    const userData = JSON.parse(localStorage.getItem('user'))

    if (email.trim() === '' || password.trim() === '') {
      alert('Fields are required')
    } else {
      if (userData && userData.length) {
        const userLoggin = userData.filter((ele, index) => {
          return ele.email === email && ele.password === password
        })
        if (userLoggin.length === 0) {
          alert('Invalid Details')
        } else {
          alert('User Loggin successfully')
          navigateToHome('/Home')
        }
      }
    }
  }

  return (
    <>
      <section className="py-26 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <a className="inline-block mx-auto mb-6" href="#">
                <img className="w-40" src={logo} alt="" />
              </a>
              {!location.state.isLoggedIn ? (
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Sign Up</h2>
              ) : (
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Log in</h2>
              )}
            </div>
            <form action="">
              {!location.state.isLoggedIn && (
                <div className="mb-6">
                  <label className="block mb-2 font-bold" htmlFor="">
                    User Name
                  </label>
                  <input
                    className="inline-block w-full p-3 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                    type="text"
                    placeholder="UserName..."
                    name="username"
                    value={inputValue.username}
                    onChange={getValue}
                  />
                </div>
              )}

              <div className="mb-6">
                <label className="block mb-2 font-bold" htmlFor="">
                  Email
                </label>
                <input
                  className="inline-block w-full p-3 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="email"
                  placeholder="email..."
                  name="email"
                  value={inputValue.email}
                  onChange={getValue}
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-bold" htmlFor="">
                  Password
                </label>
                <input
                  className="inline-block w-full p-3 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="password"
                  placeholder="**********"
                  name="password"
                  value={inputValue.password}
                  onChange={getValue}
                />
              </div>

              {!location.state.isLoggedIn && (
                <div className="mb-6">
                  <label className="block mb-2 font-bold" htmlFor="">
                    Confirm Password
                  </label>
                  <input
                    className="inline-block w-full p-3 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                    type="password"
                    placeholder="**********"
                    name="confirmPassword"
                    value={inputValue.confirmPassword}
                    onChange={getValue}
                  />
                </div>
              )}
              {location.state.isLoggedIn && (
                <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                  <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                    <label htmlFor="">
                      <input type="checkbox" />
                      <span className="ml-1 font-bold">Remember me</span>
                    </label>
                  </div>
                  <div className="w-full lg:w-auto px-4">
                    <a
                      className="inline-block font-bold hover:underline"
                      href="#"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
              )}

              {!location.state.isLoggedIn ? (
                <button
                  className="inline-block w-full py-3 px-6 mb-6 text-center text-lg leading-6 text-white font-bold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                  onClick={(e) => submitt(e)}
                >
                  Sign Up
                </button>
              ) : (
                <button
                  className="inline-block w-full py-3 px-6 mb-6 text-center text-lg leading-6 text-white font-bold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                  onClick={(e) => checkSignIn(e)}
                >
                  Log In
                </button>
              )}

              {location.state.isLoggedIn ? (
                <p className="text-center font-bold">
                  Don&rsquo;t have an account?{' '}
                  <a className="text-red-500 hover:underline" href="#">
                    Sign up
                  </a>
                </p>
              ) : (
                <p className="text-center font-bold">
                  Do you have an account?{' '}
                  <a className="text-red-500 hover:underline" href="#">
                    Loggin
                  </a>
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp
