import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

function Cart() {
  const [priceCart, setPriceCart] = useState(0)
  const { Cart } = useSelector(state => state)
  const { data } = Cart

  useEffect(() => {
    const priceAcc = data.reduce((acc, item) => {
      const { price } = item
      return price + acc
    }, 0)

    setPriceCart(priceAcc)
  }, [data])

  return (
    <div>
      <p>O carrinho possui {data.length} itens</p>
      <p>Seu carrinho está em ${Number(priceCart).toFixed(2)} dollars</p>
    </div>
  )
}

export default Cart;