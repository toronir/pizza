import { useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Layout/Header';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Layout/Footer';

const RootLayout = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <>
      {modalIsShown && <Cart onClose={hideModalHandler} />}
      <Header onShowCart={showModalHandler} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
