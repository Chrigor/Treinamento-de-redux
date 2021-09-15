import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart } from '../store/ducks/Cart/actions';


function ListItems({ items }) {
  const { Cart } = useSelector(state => state)
  const { data } = Cart

  const dispatch = useDispatch()

  function addItemToCart(item) {
    dispatch(addToCart(item))
  }

  function removeItem(id) {
    dispatch(removeFromCart(id))
  }

  return <ul style={{ height: '100%', maxHeight: '500px', marginTop: '8px', overflowY: 'auto' }}>
    {items.map((item) => {
      const hasItem = data.find(itemCart => itemCart.id === item.id)
      return (
        < div >
          <h1>{item.title}</h1>
          {hasItem ? <button onClick={() => removeItem(item.id)}>Remove</button> : <button onClick={() => addItemToCart(item)}>Add</button>}
        </div>
      )
    })
    }
  </ul >
}

export default ListItems;