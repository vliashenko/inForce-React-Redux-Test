import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productsOperations, productsSelectors } from 'redux/products';
import ProductItemPage from 'components/ProductItemPage/ProductItemPage';
import Loader from 'components/Loader/Loader';

const PDP = () => {
  const dispatch = useDispatch();
  const error = useSelector(productsSelectors.getError);
  const product = useSelector(productsSelectors.getProduct);
  const status = useSelector(productsSelectors.getStatus);
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    dispatch(productsOperations.fetchProductById(productId));
  }, [dispatch, productId]);

  if (status === 'rejected' || error === 'true') {
    return (
      <div className="PDP">
        <h2>Something went wrong(</h2>
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div className="PDP">
        <Loader />
      </div>
    );
  }

  if (status === 'fulfilled') {
    return (
      <div className="page__container">
        <ProductItemPage product={product} />
      </div>
    );
  }
};

export default PDP;
