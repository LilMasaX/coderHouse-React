import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega algunos productos para comenzar a comprar!</p>
        <Link to="/" className="btn-primary">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="cart-item-price">${item.price}</p>
              <p className="cart-item-category">{item.category}</p>
            </div>
            
            <div className="cart-item-quantity">
              <label>Cantidad:</label>
              <div className="quantity-controls">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  disabled={item.quantity >= item.stock}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="cart-item-subtotal">
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            
            <button 
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="cart-total">
          <h3>Total: ${getTotalPrice()}</h3>
        </div>
        
        <div className="cart-actions">
          <button className="btn-secondary" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="btn-primary">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
