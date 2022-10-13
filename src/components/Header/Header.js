import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartSelectors } from 'redux/cart';
import styles from './Header.module.css';

const Header = () => {
  const quantity = useSelector(cartSelectors.getQuantity);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to="/" className={styles.header__logo}>
          SmartSpace
        </Link>
        <nav className={styles.header__menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link to="/cart" className={styles.menu__link + ' cart'}>
                Cart
                <span className={styles.menu__amount}>{quantity}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
