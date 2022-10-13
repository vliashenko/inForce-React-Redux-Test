import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/cart/cart-slice';
import { toast } from 'react-toastify';
import shortid from 'shortid';

const useAddFormHook = () => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'width':
        setWidth(value);
        break;
      case 'height':
        setHeight(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e, currentProduct, onClose) => {
    e.preventDefault();
    if (
      width.trim().length === 0 ||
      height.trim().length === 0 ||
      weight.trim().length === 0
    ) {
      toast.error(`Оберіть параметри для продовження`);
      return;
    }

    const newId = shortid();

    const newProduct = {
      ...currentProduct,
      id: newId,
      size: {
        width,
        height,
      },
      weight,
      quantity: 1,
    };

    dispatch(addProduct(newProduct));
    toast.success(`Товар '${currentProduct.name}' був доданий до кошика`);
    onClose();
  };
  return {
    width,
    height,
    weight,
    handleChange,
    handleSubmit,
  };
};

export default useAddFormHook;
