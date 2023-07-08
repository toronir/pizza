import { useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/Layout/Header";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";

const RootLayout = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    };


    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Outlet />
            </main>
        </CartProvider>
    )
}

export default RootLayout;