import { Link } from 'react-router-dom';
import styles from './ProductItem.module.css';
import propTypes from 'prop-types';

const ProductItem = ({
  id,
  imageUrl,
  name,
  onOpen,
  size,
  weight,
  comments,
}) => {
  return (
    <div className={styles.product__item}>
      <Link to={`/product/${id}`}>
        <img
          className={styles.product__item__img}
          src={imageUrl}
          alt="product"
        />
        <p className={styles.product__item__name}>{name}</p>
      </Link>
      <div
        className={styles.product__addToCart}
        onClick={() => onOpen(id, imageUrl, name, size, weight, comments)}
      >
        +
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  id: propTypes.number.isRequired,
  imageUrl: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onOpen: propTypes.func.isRequired,
  size: propTypes.object.isRequired,
  weight: propTypes.string.isRequired,
  comments: propTypes.arrayOf(propTypes.object),
};

export default ProductItem;
