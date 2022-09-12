import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

    const [ cartisVisible, serCartIsVisible ] = useState(false);

    const showCartHandler = () => {
        serCartIsVisible(true)
    }

    const hideCartHandler = () => {
        serCartIsVisible(false)
    }

  return (
    <React.Fragment>
        {cartisVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
          <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
