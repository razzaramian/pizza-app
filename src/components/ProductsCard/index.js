import { useState } from 'react'

import { getId } from 'redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux';

import 'components/ProductsCard/index.scss'

const ProductsCard = ({
  id,
  name,
  descr,
  price,
  img
}) => {
  const disptach = useDispatch()
  const [counter, setCounter] = useState(0)

  const handleCounter = (direction) => {
    if (direction === 'inc') {
      setCounter(counter + 1)
    }

    if (direction === 'dec' && counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className='product-card'>
      <div className="product-card-img">
        <img src={img} alt={name} />
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
          <button className="btn add-to" onClick={() => disptach(getId(id))}>Add to cart</button>
          <button className="btn plus" onClick={() => handleCounter('inc')}>+</button>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard