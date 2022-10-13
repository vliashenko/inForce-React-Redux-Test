import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsOperations } from 'redux/products';
import { toast } from 'react-toastify';

const useEditFormHook = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [count, setCount] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'count':
        setCount(value);
        break;
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

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleSubmit = (e, currentProduct, onClose) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      count.trim().length === 0 ||
      width.trim().length === 0 ||
      height.trim().length === 0 ||
      weight.trim().length === 0
    ) {
      toast.error(`Оберіть параметри для продовження`);
      return;
    }

    const newProduct = {
      ...currentProduct,
      name,
      count,
      size: {
        width,
        height,
      },
      weight,
    };

    dispatch(productsOperations.editProduct(newProduct));
    refreshPage();
    toast.success(`Товар '${name}' був змінений`);
  };
  return {
    name,
    count,
    width,
    height,
    weight,
    handleChange,
    handleSubmit,
  };
};

export default useEditFormHook;
