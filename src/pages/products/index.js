import { useEffect, useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import { getData } from 'redux/thunks/productSlice'
import { useDispatch, useSelector } from 'react-redux';

import Filters from 'components/Filters'
import { CATEGORY, SORT } from 'constants';
import ProductsCard from 'components/ProductsCard'

import 'pages/Products/index.scss'

const Products = () => {
  const disptach = useDispatch();
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');
  const { products, loading, error } = useSelector((state) => state.products);

  const handleFilter = (e) => {
    setCategory(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const filteringProducts = () => {
    const filtered = products.filter((item) => {
      if (category === '' || category === 'Default') {
        return products
      }

      return item.category === category;
    })

    return filtered;
  }

  const filtered = filteringProducts();

  const sortingProducts = () => {
    if (sort === 'Price Up') {
      filtered.sort((a, b) => a.price - b.price)
    }
    if (sort === 'Price Down') {
      filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }

  const currentProducts = sortingProducts()

  useEffect(() => {
    sortingProducts()
  }, [sort])

  useEffect(() => {
    disptach(getData())
  }, [disptach])

  if (loading) {
    return (
      <div className="products-container">
        <ImSpinner8 className='spinner' />
      </div>
    )
  }

  if (error === 'Server side error') {
    return (
      <div className="products-conatiner">
        <div>{error}</div>
      </div>
    )
  }
  return (
    <div className='products'>
      <div className="products-container">
        <div className="products-filters">
          <Filters name='Category' value={category} onChange={handleFilter} data={CATEGORY} />
          <Filters name='Sort' value={sort} onChange={handleSort} data={SORT} />
        </div>
        <div className="products-cards">
          {currentProducts.map(item => {
            return <ProductsCard {...item} key={item.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Products