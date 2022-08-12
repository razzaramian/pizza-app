import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import 'pages/Cart/index.scss'

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const [inCart, setInCart] = useState([])

  const getKeys = Object.keys(cart)

  const choosenProducts = () => {
    const prod = products.map((item) => {
      if (getKeys.includes(item.id)) {
        return item
      }
    })

    console.log(prod)
  }

  useEffect(() => {
    choosenProducts()
  }, [cart])

  return (
    <div className='cart'>
      <div className="cart-container">
        hello
      </div>
    </div>
  )
}

export default Cart