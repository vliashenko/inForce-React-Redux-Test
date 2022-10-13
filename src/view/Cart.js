import ModalWindow from 'components/ModalWindow/ModalWindow';
import ProductDeleteForm from 'components/ProductDeleteForm/ProductDeleteForm';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { cartSelectors, cartOperations } from 'redux/cart';
import { resetCart } from 'redux/cart/cart-slice';

const Cart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState();
  const cart = useSelector(cartSelectors.getCart);
  const status = useSelector(cartSelectors.getStatus);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenModal = id => {
    setModalIsOpen(true);
    setCurrentProduct(id);
  };

  const handleBuy = () => {
    dispatch(cartOperations.addToCart(cart));
    if (status === 'fulfilled') {
      toast.success('Товари були успішно замовлені');
      dispatch(resetCart());
    } else if (status === 'rejected') {
      toast.error('Щось пішло не так');
    }
  };

  return (
    <div className="cart __container">
      <div className="wrapper">
        {cart.length > 0 &&
          cart?.map(product => {
            const { id, name, size, weight, comments, imageUrl } = product;
            return (
              <div key={id}>
                <div className="cart__detail">
                  <img className="cart__img" src={imageUrl} alt="alternative" />
                  <div className="details">
                    <p className="cart__name">Назва товару: {name}</p>
                    <p className="cart__name">Код товару: {id}</p>
                    <p className="cart__name">
                      Розміри: {size.width}x{size.height}
                    </p>
                    <p className="cart__name">Вага: {weight}</p>
                    <p className="cart__comments">
                      Коментарі:
                      {comments?.map(com => {
                        const { id } = com;
                        return (
                          <p key={id} className="comment">
                            {com.description}
                          </p>
                        );
                      })}
                    </p>
                  </div>
                  <div className="delete__detail">
                    <i
                      onClick={() => handleOpenModal(id)}
                      className="fa-solid fa-trash trash"
                    ></i>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        {cart.length <= 0 && <p className="title"> Товари відсутні </p>}
        {modalIsOpen && (
          <ModalWindow onClose={handleCloseModal}>
            <ProductDeleteForm onClose={handleCloseModal} id={currentProduct} />
          </ModalWindow>
        )}
        {cart?.length > 0 && (
          <div className="button__buy__container">
            <button className="button__buy" onClick={handleBuy}>
              Замовити
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
