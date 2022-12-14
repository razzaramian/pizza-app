import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getId, totalPrice } from 'redux/slices/cartSlice'

import SumReduce from 'components/SumReduce'

import 'components/ProductsCard/index.scss'

const INC = 'inc'
const DEC = 'dec'

const ProductsCard = (props) => {
  const {
    id,
    name,
    descr,
    price,
    img
  } = props;
  const disptach = useDispatch()
  const [counter, setCounter] = useState(0)
  const { cart } = useSelector((state) => state.cart)


  const handleCounter = (direction) => {
    if (direction === INC) {
      setCounter(counter + 1)
    }

    if (direction === DEC && counter > 0) {
      setCounter(counter - 1)
    }
  }

  const isProductExist = () => {
    if (id in cart) {
      return cart[id].counter + counter
    } else {
      return counter
    }
  }

  const addToCart = () => {
    const carts = {
      ...cart,
      [id]: {
        // TODO: on this way we delete existing data while adding a new one, check this out
        counter: isProductExist(),
        price: price * isProductExist(),
      }
    }

    if (counter > 0) {
      disptach(getId(carts))
      setCounter(0)
    }

    disptach(totalPrice(SumReduce(carts)))
  }

  return (
    <div className='product-card'>
      <div className="product-card-img">
        <img src={img} alt={name} style={{ transform: `rotate(-${counter * 10}deg)` }} />
      </div>
      <div className="product-name">
        {name} {counter}
      </div>
      <div className="product-description">
        {descr}
      </div>
      <div className="product-price">
        ${price}
      </div>
      <div className="product-card-footer">
        <div className="product-btns">
          <button className="btn minus" onClick={() => handleCounter('dec')}>-</button>
          <button className="btn add-to" onClick={addToCart}>Add to cart</button>
          <button className="btn plus" onClick={() => handleCounter('inc')}>+</button>
        </div>
      </div>
    </div >
  )
}

export default ProductsCard