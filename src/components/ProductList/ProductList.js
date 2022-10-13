import ProductItem from 'components/ProductItem/ProductItem';
import styles from './ProductList.module.css';
import propTypes from 'prop-types';

const ProductList = ({ products, onOpen, options, onChange, value }) => {
  return (
    <>
      <div className={styles.sort}>
        Sort By:
        <select value={value} onChange={evt => onChange(evt.target.value)}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.container}>
        {products?.map(product => {
          const { id, ...allProps } = product;
          return <ProductItem key={id} id={id} onOpen={onOpen} {...allProps} />;
        })}
      </div>
    </>
  );
};

ProductList.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
  onOpen: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  options: propTypes.arrayOf(propTypes.object),
  value: propTypes.string.isRequired,
};

export default ProductList;
