import { useEffect } from 'react'

import { getData } from 'pages/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'

import 'pages/products/index.scss'
const Products = () => {
  const { products, loading } = useSelector((state) => state.productsReducer)

  const disptach = useDispatch()
  useEffect(() => {
    disptach(getData())
    console.log(products)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {products.map(({ id, name }) => {
        return (
          <div key={id}>{name}</div>
        )
      })}
    </div>
  )
}

export default Products