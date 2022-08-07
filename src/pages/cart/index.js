import { useDispatch, useSelector } from 'react-redux';

import 'pages/Cart/index.scss'
import { useEffect } from 'react';

const Cart = () => {
  const { productsId } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);

  return (
    <div className='cart'>
      <div className="cart-container">
        {products.map(item => {
          if (productsId.includes(item.id)) {
            return <div className="cart-item">{item.name}</div>
          }
        })}
      </div>
    </div>
  )
}

export default Cart