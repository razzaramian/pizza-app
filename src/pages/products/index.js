import { useEffect, useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import 'pages/Products/index.scss'
import ProductsCard from 'components/ProductsCard'
import { getData } from 'pages/Products/productSlice'

const Products = () => {
  const disptach = useDispatch();
  const [category, setCategory] = useState('');
  const { products, loading, error } = useSelector((state) => state.products);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const filterProducts = () => {
    const filtered = products.filter((item) => {
      return item.category !== category;
    })

    return filtered.map(item => {
      return <ProductsCard {...item} key={item.id} />
    })
  }

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

  const Filters = () => {
    return (
      <div className="products-filters">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={category}
            onChange={handleChange}
            label="Category"
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value='hot'>Hot</MenuItem>
            <MenuItem value='cheesy'>Cheesy</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }

  return (
    <div className='products'>
      <div className="products-container">
        <Filters />
        <div className="products-cards">
          {filterProducts()}
        </div>
      </div>
    </div>
  )
}

export default Products