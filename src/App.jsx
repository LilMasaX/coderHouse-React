import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="*" element={
                <div className="not-found">
                  <h2>404 - Página no encontrada</h2>
                  <p>La página que buscas no existe.</p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
