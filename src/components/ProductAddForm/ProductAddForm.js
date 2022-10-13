import useAddFormHook from 'hooks/useAddFormHook';
import styles from './ProductAddForm.module.css';
import propTypes from 'prop-types';

const ProductAddForm = ({ onClose, currentProduct }) => {
  const { name, imageUrl } = currentProduct;
  const { width, height, weight, handleChange, handleSubmit } =
    useAddFormHook();
  return (
    <form
      className={styles.form}
      onSubmit={e => handleSubmit(e, currentProduct, onClose)}
    >
      <p className={styles.title}>Оберіть необхідні параметри</p>
      <p className={styles.title}>{name}</p>
      <div className={styles.wrapper}>
        <div className={styles.form__image__container}>
          <img
            className={styles.form__image}
            src={imageUrl}
            alt="alternnative"
          />
        </div>

        <div className={styles.form__parametrs}>
          <input
            onChange={e => handleChange(e)}
            placeholder="Введіть довжину у сантиметрах"
            title="Оберіть довжину у сантиметрах"
            name="width"
            value={width}
            className={styles.form__input}
            pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])"
            type="number"
          />
          <input
            onChange={e => handleChange(e)}
            placeholder="Введіть висоту у сантиметрах"
            title="Введіть висоту у сантиметрах"
            name="height"
            value={height}
            className={styles.form__input}
            pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])"
            type="number"
          />
          <input
            onChange={e => handleChange(e)}
            placeholder="Введіть вагу у кг"
            title="Введіть вагу у кг"
            name="weight"
            value={weight}
            className={styles.form__input}
            pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])"
            type="number"
          />
        </div>
      </div>
      <div className={styles.button__container}>
        <button className={styles.button__submit} type="submit">
          Додати
        </button>
        <button className={styles.button__cancel} onClick={onClose}>
          Скасувати
        </button>
      </div>
    </form>
  );
};

ProductAddForm.propTypes = {
  onClose: propTypes.func.isRequired,
  currentProduct: propTypes.shape({
    name: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
  }),
};

export default ProductAddForm;
