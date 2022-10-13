import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productsOperations, productsSelectors } from 'redux/products';

const usePLPHook = () => {
  const sortOptions = [
    { value: 'abc', label: 'By ABC' },
    { value: 'count', label: 'By count' },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const sortOrder = new URLSearchParams(location.search).get('sortBy') ?? 'abc';

  const dispatch = useDispatch();
  const error = useSelector(productsSelectors.getError);
  const products = useSelector(productsSelectors.getProducts);
  const status = useSelector(productsSelectors.getStatus);

  const [productsSorted, setProductsSorted] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    if (location.search !== '') {
      return;
    }

    navigate({
      ...location,
      search: `sortBy=abc`,
    });
  }, [location, navigate]);

  useEffect(() => {
    setProductsSorted(() =>
      products?.slice().sort((a, b) => {
        return sortOrder === 'abc'
          ? a.name.localeCompare(b.name)
          : a.count - b.count;
      })
    );
  }, [sortOrder, products]);

  const onSortOrderChange = order => {
    navigate({
      ...location,
      search: `sortBy=${order}`,
    });
  };

  const handleOpenModal = (id, imageUrl, name, size, weight, comments) => {
    setModalIsOpen(true);
    setCurrentProduct({ id, imageUrl, name, size, weight, comments });
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    dispatch(productsOperations.fetchProducts());
  }, [dispatch]);

  return {
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
  };
};

export default usePLPHook;
