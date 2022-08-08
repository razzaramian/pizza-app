import { useDispatch, useSelector } from 'react-redux';

import 'pages/Cart/index.scss'
import { useEffect } from 'react';

const Cart = () => {
  const { inCart } = useSelector((state) => state.cart);

  return (
    <div className='cart'>
      <div className="cart-container">
        {inCart.map(item => {
         return <div key={item.id}>{item.name}</div>
        })}
      </div>
    </div>
  )
}

export default Cart