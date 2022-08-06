import { useEffect, useState } from 'react'

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
  const { productsId } = useSelector((state) => state.cart);

  useEffect(() => {
    console.log(productsId)
  }, [productsId])

  return (
    <div className='product-card'>
      <div className="product-card-img">
        <img src={img} alt={name} />
      </div>
      <div className="product-name">
        {name}
      </div>
      <div className="product-description">
        {descr}
      </div>
      <div className="product-price">
        ${price}
      </div>
      <div className="product-card-footer">
        <div className="product-btns">
          <button className="btn minus">-</button>
          <button className="btn add-to" onClick={() => disptach(getId(id))}>Add to cart</button>
          <button className="btn plus">+</button>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard