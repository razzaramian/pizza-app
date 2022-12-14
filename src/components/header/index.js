import { useSelector } from 'react-redux';


import icon from 'assets/logo/pizza-icon.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { Link } from 'react-router-dom'

import 'components/Header/index.scss'

const Header = () => {
  const { cart, totalPrice } = useSelector((state) => state.cart);

  return (
    <header className='header'>
      <Link to='/' className="header-logo">
        <img src={icon} alt="pizza" />
      </Link>
      <div className="header-nav">
        <div className="header-price">
          $ {totalPrice}
        </div>
        <Link to='/cart' className="header-cart">
          <div className="header-cart-counter">
            <span>{Object.keys(cart).length}</span>
          </div>
          <AiOutlineShoppingCart className='header-cart-icon' />
        </Link>
      </div>
    </header>
  )
}

export default Header