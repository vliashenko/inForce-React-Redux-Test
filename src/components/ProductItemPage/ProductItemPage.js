import { useState } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import ProductEditForm from 'components/ProductEditForm/ProductEditForm';
import styles from './ProductItemPage.module.css';
import propTypes from 'prop-types';

const ProductItemPage = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState();

  const handleOpenModal = product => {
    setModalIsOpen(true);
    setCurrentProduct(product);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.product__page}>
      <div className={styles.product__image__container}>
        <img
          className={styles.product__img}
          src={product?.imageUrl}
          alt="product"
        />
      </div>
      <div className={styles.product__desc}>
        <p className={styles.product__title}>Назва: {product?.name}</p>
        <p className={styles.product__title}>Кількість: {product?.count}</p>
        <p className={styles.product__title}>Вага: {product?.weight}</p>
        <p className={styles.product__title}>
          Розмір: {product?.size.width}x{product?.size.height}
        </p>
        <div className={styles.product__comments}>
          Комментарі:
          {product?.comments.length > 0
            ? product?.comments?.map(com => {
                return (
                  <ul key={com.id}>
                    <li className={styles.product__comment}>
                      {com.description}
                      <div className={styles.product__comment__date}>
                        {com.date}
                      </div>
                    </li>
                  </ul>
                );
              })
            : ' Наразі коментарі відсутні'}
          <div
            className={styles.button__edit}
            onClick={() => handleOpenModal(product)}
          >
            EDIT
          </div>
          {modalIsOpen && (
            <ModalWindow onClose={handleCloseModal}>
              <ProductEditForm
                onClose={handleCloseModal}
                currentProduct={currentProduct}
              />
            </ModalWindow>
          )}
        </div>
      </div>
    </div>
  );
};

ProductItemPage.propTypes = {
  imageUrl: propTypes.string,
  name: propTypes.string,
  count: propTypes.number,
  size: propTypes.shape({
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired,
  }),
  weight: propTypes.string,
  color: propTypes.arrayOf(propTypes.string),
  comments: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      productId: propTypes.number.isRequired,
      description: propTypes.string.isRequired,
      date: propTypes.string.isRequired,
    })
  ),
};

export default ProductItemPage;
