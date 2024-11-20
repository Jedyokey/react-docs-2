import React from 'react'
import ShoppingCart from '../challenges/ShoppingCart'
import RemoveCartItem from '../challenges/RemoveCartItem'
import TaskApp from '../challenges/TaskApp'
import TaskAppImmer from '../challenges/TaskAppImmer'

const ArrayChallenge = () => {
  return (
    <div>
        <h2>Challenge 1 of 4: Update an item in the shopping cart</h2>
        <ShoppingCart />

        <h2>Challenge 2 of 4: Remove an item from the shopping cart</h2>
        <RemoveCartItem />  

        <h2>Challenge 3 of 4: Fix the mutations using non-mutative methods</h2>
        <TaskApp />

        <h2>Challenge 4 of 4: Fix the mutations using Immer</h2>
        <TaskAppImmer />
    </div>
  )
}

export default ArrayChallenge
