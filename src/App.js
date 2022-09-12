import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

function App() {

    const [ cartisVisible, serCartIsVisible ] = useState(false);

    const showCartHandler = () => {
        serCartIsVisible(true)
    }

    const hideCartHandler = () => {
        serCartIsVisible(false)
    }

  return (
    <CartContextProvider>
        {cartisVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
          <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
