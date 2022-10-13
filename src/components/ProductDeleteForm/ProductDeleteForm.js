import { deleteProduct } from 'redux/cart/cart-slice';
import { useDispatch } from 'react-redux';
import styles from './ProductDeleteForm.module.css';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';

const ProductDeleteForm = ({ onClose, id }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteProduct(id));
    toast.success('Товар був успішно видалений!');
    onClose();
  };
  return (
    <div className={styles.form__delete}>
      <p className={styles.form__title}>
        Ви впевнені, що хочете видалити цей товар з корзини?
      </p>
      <div className={styles.form__button__container}>
        <button
          className={styles.button__submit}
          onClick={() => handleDelete(id)}
        >
          Так
        </button>
        <button className={styles.button__cancel} onClick={onClose}>
          Ні
        </button>
      </div>
    </div>
  );
};

ProductDeleteForm.propTypes = {
  onClose: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
};

export default ProductDeleteForm;
