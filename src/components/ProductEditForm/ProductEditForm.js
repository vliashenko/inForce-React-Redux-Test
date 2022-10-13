import useEditFormHook from 'hooks/useEditFormHook';
import styles from './ProductEditForm.module.css';

const ProductEditForm = ({ onClose, currentProduct }) => {
  const { name, count, width, height, weight, handleChange, handleSubmit } =
    useEditFormHook();
  return (
    <form
      className={styles.form}
      onSubmit={e => handleSubmit(e, currentProduct, onClose)}
    >
      <p className={styles.title}>Введіть нові параметри</p>
      <div className={styles.wrapper}>
        <div className={styles.form__parametrs}>
          <input
            placeholder="Введіть нову назву"
            title="Введіть нову назву"
            value={name}
            onChange={e => handleChange(e)}
            name="name"
            className={styles.form__input}
            pattern="^[a-zA-Zа-яА-Я\s]*$"
            type="text"
          />
          <input
            placeholder="Введіть нову кількість"
            title="Введіть нову кількість"
            value={count}
            onChange={e => handleChange(e)}
            name="count"
            className={styles.form__input}
            pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])"
            type="number"
          />
          <input
            placeholder="Введіть нову довжину у сантиметрах"
            title="Оберіть довжину у сантиметрах"
            value={width}
            onChange={e => handleChange(e)}
            name="width"
            className={styles.form__input}
            pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])"
            type="number"
          />
          <input
            placeholder="Введіть нову висоту у сантиметрах"
            title="Введіть висоту у сантиметрах"
            value={height}
            onChange={e => handleChange(e)}
            name="height"
            className={styles.form__input}
            pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])"
            type="number"
          />
          <input
            placeholder="Введіть нову вагу у кг"
            title="Введіть вагу у кг"
            value={weight}
            onChange={e => handleChange(e)}
            name="weight"
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

export default ProductEditForm;
