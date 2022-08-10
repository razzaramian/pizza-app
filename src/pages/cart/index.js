import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import 'pages/Cart/index.scss'

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);

  return (
    <div className='cart'>
      <div className="cart-container">
        as
      </div>
    </div>
  )
}

export default Cart