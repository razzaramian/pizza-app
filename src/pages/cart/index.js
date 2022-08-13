import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import 'pages/Cart/index.scss'

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const [inCart, setInCart] = useState([])

  const getKeys = Object.keys(cart)

  const choosenProducts = () => {
    return products?.filter(obj => {
      if (getKeys.includes(obj.id.toString())) {
        return true
      }
    })
  }

  const removeProduct = (id) => {
    console.log(id)
  }

  useEffect(() => {
    setInCart(choosenProducts)
  }, [cart])

  return (
    <div className='cart'>
      <div className="cart-container">
        {inCart.map(({ id, name, img }) => {
          return (
            <div className='cart-product' key={id}>
              <div className="cart-product-info">
                <div className="cart-product-img">
                  <img src={img} alt={name} />
                </div>
                <div className="cart-product-name">{name}</div>
                <div className="cart-product-counter">{cart[id]}pc.</div>
              </div>
              <div className="cart-product-remove" onClick={() => removeProduct(id)}>
                <button>Remove</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart