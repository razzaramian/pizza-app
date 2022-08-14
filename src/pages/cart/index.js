import { useEffect, useState } from 'react';

import { removeProdcut } from 'redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import 'pages/Cart/index.scss'

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const [inCart, setInCart] = useState([])
  const dispatch = useDispatch()

  const getKeys = Object.keys(cart)

  const choosenProducts = () => {
    return products?.filter(obj => {
      if (getKeys.includes(obj.id.toString())) {
        return true
      }
    })
  }

  useEffect(() => {
    setInCart(choosenProducts)
  }, [cart])

  return (
    <div className='cart'>
      <div className="cart-container">
        {getKeys.length ? (
          inCart.map(({ id, name, img }) => {
            return (
              <div className='cart-product' key={id}>
                <div className="cart-product-info">
                  <div className="cart-product-img">
                    <img src={img} alt={name} />
                  </div>
                  <div className="cart-product-name">{name}</div>
                  <div className="cart-product-counter">{cart[id]}pc.</div>
                </div>
                <div className="cart-product-remove"
                  onClick={() => dispatch(removeProdcut(id))}>
                  <button>Remove</button>
                </div>
              </div>
            )
          })
        ) : (
          <div className='empty'>
            <span>Empty Cart</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart