import { useDispatch, useSelector } from 'react-redux';

import 'pages/Cart/index.scss'

const Cart = () => {
  const { productsId } = useSelector((state) => state.cart);


  return (
    <div>cart</div>
  )
}

export default Cart