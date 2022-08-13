import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import 'pages/Cart/index.scss'

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const [inCart, setInCart] = useState([])

  const getKeys = Object.keys(cart)

  const choosenProducts = () => {
    const prod = products?.filter(item => {
      if (getKeys.includes(item.id.toString())) {
        return item
      }
    })

    setInCart(prod)
  }

  useEffect(() => {
    choosenProducts()
  }, [cart])

  return (
    <div className='cart'>
      <div className="cart-container">
        {inCart.map(({ id, name }) => {
          return (
            <div key={id}>{name}</div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart