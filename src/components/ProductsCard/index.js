import 'components/ProductsCard/index.scss'

const ProductsCard = ({
  name,
  descr,
  price,
  img
}) => {
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
    </div>
  )
}

export default ProductsCard