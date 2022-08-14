import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { removeProdcut, totalPrice } from 'redux/slices/cartSlice';

import SumReduce from 'components/SumReduce';

import 'pages/Cart/index.scss'

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const [inCart, setInCart] = useState([])
  const dispatch = useDispatch()

  const getKeys = Object.keys(cart).map(Number)

  const choosenProducts = () => {
    return products.filter(({ id }) => {
      if (getKeys.includes(id)) {
        return true
      }
    })
  }

  const onRemove = (id) => {
    dispatch(removeProdcut(id))
    dispatch(totalPrice(SumReduce(cart).toFixed(2)))
  }

  useEffect(() => {
    setInCart(choosenProducts())
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
                  <div className="cart-product-counter"></div>
                </div>
                <div className="cart-product-remove"
                  onClick={() => onRemove(id)}>
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