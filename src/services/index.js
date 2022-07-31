import { useDispatch } from 'react-redux'
import { getProducts } from 'pages/products/productSlice'

export const fetchProducts = () => {
  // const dispatch = useDispatch()
  fetch('http://localhost:4000/pizza')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(e => console.log(e))
}