import { useState } from 'react'
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './Store/CartProvider';

function App() {
  const [cartShown, setCartShown] = useState(false)


  const cartShownHandler = props => {
    setCartShown(true)
  }
  const cartHideHandler = props => {
    setCartShown(false)
  }

  return (
    <CartProvider>
      {cartShown && < Cart onClose={cartHideHandler} />}
      <Header onShowCart={cartShownHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>

  );
}

export default App;
