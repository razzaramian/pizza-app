import { useEffect, useState } from 'react';

import { ImSpinner8 } from 'react-icons/im';
import { getData } from 'redux/thunks/productSlice'
import { useDispatch, useSelector } from 'react-redux';

import Filters from 'components/Filters'
import { CATEGORY, SORT } from 'constants';
import ProductsCard from 'components/ProductsCard'

import 'pages/Products/index.scss'

const Products = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const disptach = useDispatch();
  const [sort, setSort] = useState('');
  const [pizza, setPizza] = useState([]);
  const [category, setCategory] = useState('');

  const DEFAULT = 'Default'
  const PRICE_UP = 'Price Up';
  const PRICE_DOWN = 'Price Down';

  const handleFilter = (e) => {
    setCategory(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const filteredProducts = () => {
    return products.filter((item) => {
      if (category === DEFAULT || category === '') {
        return true
      }
      return item.category === category
    })
  }

  const sortingProducts = () => {
    if (sort === PRICE_UP) {
      setPizza(pizza.slice().sort((a, b) => a.price - b.price))
    } else if (sort === PRICE_DOWN) {
      setPizza(pizza.slice().sort((a, b) => b.price - a.price))
    }
  }

  useEffect(() => {
    sortingProducts()
    // eslint-disable-next-line
  }, [sort])

  useEffect(() => {
    setPizza(filteredProducts())
    // eslint-disable-next-line
  }, [category])

  useEffect(() => {
    disptach(getData())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setPizza(products)
    // eslint-disable-next-line
  }, [products])


  return (
    <div className='products'>
      <div className="products-container">
        {loading ? <ImSpinner8 className='spinner' /> : null}
        {error === 'Server side error' ? { error } : null}
        <div className="products-filters">
          <Filters name='Category' value={category} onChange={handleFilter} data={CATEGORY} />
          <Filters name='Sort' value={sort} onChange={handleSort} data={SORT} />
        </div>
        <div className="products-cards">
          {pizza.map(item => {
            return <ProductsCard {...item} key={item.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Products