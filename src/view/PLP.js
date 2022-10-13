import usePLPHook from 'hooks/usePLPHook';
import ProductList from 'components/ProductList/ProductList';
import Loader from 'components/Loader/Loader';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import ProductAddForm from 'components/ProductAddForm/ProductAddForm';

const PLP = () => {
  const {
    sortOptions,
    sortOrder,
    error,
    status,
    productsSorted,
    modalIsOpen,
    currentProduct,
    onSortOrderChange,
    handleOpenModal,
    handleCloseModal,
  } = usePLPHook();

  if (status === 'rejected' || error === 'true') {
    return (
      <div className="PLP">
        <h2>Something went wrong(</h2>
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div className="PLP">
        <Loader />
      </div>
    );
  }

  if (status === 'fulfilled') {
    return (
      <div className="page__container">
        <ProductList
          products={productsSorted}
          options={sortOptions}
          value={sortOrder}
          onChange={onSortOrderChange}
          onOpen={handleOpenModal}
        />
        {modalIsOpen && (
          <ModalWindow onClose={handleCloseModal}>
            <ProductAddForm
              currentProduct={currentProduct}
              onClose={handleCloseModal}
            />
          </ModalWindow>
        )}
      </div>
    );
  }
};

export default PLP;
