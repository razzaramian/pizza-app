import { useEffect } from 'react'

import { getData } from 'pages/Products/productSlice'
import { useDispatch, useSelector } from 'react-redux'

import 'pages/Products/index.scss'
const Products = () => {
  const { products, loading, error } = useSelector((state) => state.products)

  const disptach = useDispatch()
  useEffect(() => {
    disptach(getData())
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error === 'Server side error') {
    return <div>{error}</div>
  }

  return (
    <div className='products'>
      <div className="products-container">
        hello
      </div>
    </div>
  )
}

export default Products