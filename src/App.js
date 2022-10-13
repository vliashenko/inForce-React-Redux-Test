import { Loader } from 'components';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = lazy(() => import('./components/Header/Header'));
const PLP = lazy(() => import('./view/PLP'));
const PDP = lazy(() => import('./view/PDP'));
const Cart = lazy(() => import('./view/Cart'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<PLP />} />
          <Route path="/product/:id" element={<PDP />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ToastContainer />
      </div>
    </Suspense>
  );
}

export default App;
