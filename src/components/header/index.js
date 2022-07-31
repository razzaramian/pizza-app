import icon from 'assets/logo/pizza-icon.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { Link } from 'react-router-dom'

import 'components/header/index.scss'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className="header-logo">
        <img src={icon} alt="pizza" />
      </Link>
      <div className="header-nav">
        <Link to='/cart' className="header-cart">
          <AiOutlineShoppingCart className='header-cart-icon' />
        </Link>
        <div className="header-price">
          100$
        </div>
      </div>
    </header>
  )
}

export default Header