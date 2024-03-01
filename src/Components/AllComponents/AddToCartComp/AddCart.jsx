import React, { useState, useEffect } from 'react'
import '../AddToCartComp/AddCart.css'

import { DataToCart } from '../GlobalContextComp/GlobalContext'
import { useContext } from 'react'

const AddCart = () => {
  const { AddData, setAddData } = useContext(DataToCart)

  const newArr = []
  newArr.push(AddData)

  // useEffect(() => {
  //   if (obj.AddData) {
  //     setNewArr((prevArr) => [...prevArr, obj.AddData])
  //   }
  // }, [obj.AddData])

  return (
    <>
      <div className="container my-4 text">
        <h3 className="All-pies-heading">In Your Cart</h3>
        <p>Current Selection of Seasonal fruits</p>

        <table className="text-center border-2 border-dark  ">
          <thead>
            <tr>
              <th className="heading" style={{ width: '20%' }}>
                Picture
              </th>
              <th className="heading">Item Name</th>
              <th className="heading">Description</th>
              <th className="heading">Price</th>
              <th className="heading">Action</th>
            </tr>
          </thead>
          <tbody>
            {newArr.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <h1>Yet, No Items added </h1>
                </td>
              </tr>
            ) : (
              newArr.map((items, index) => {
                return (
                  <tr key={index}>
                    <td className="img_cell">
                      <img src={items.img} width="100%" />
                    </td>
                    <td>{items.title}</td>
                    <td>{items.desc}</td>
                    <td>{items.Price} </td>
                    <td>
                      <button
                        className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-700"
                        onClick={() => {
                          const removeItem = [...newArr]
                          removeItem.splice(index, 1)
                          setAddData(removeItem)
                          // console.log('clicked')
                        }}
                      >
                        {items.action}
                      </button>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AddCart
