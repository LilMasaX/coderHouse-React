import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../services/firebaseService';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const order = {
        buyer: formData,
        items: cart,
        total: getTotalPrice()
      };

      const orderId = await createOrder(order);
      setOrderId(orderId);
      clearCart();
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error al procesar la orden. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0 && !orderId) {
    return (
      <div className="checkout-empty">
        <h2>No hay productos en el carrito</h2>
        <p>Agrega productos antes de proceder al checkout.</p>
        <button onClick={() => navigate('/')} className="btn-primary">
          Ver productos
        </button>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="order-success">
        <div className="success-icon">✓</div>
        <h2>¡Orden creada exitosamente!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <p>Te enviaremos un email con los detalles de tu compra.</p>
        <button onClick={() => navigate('/')} className="btn-primary">
          Continuar comprando
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      
      <div className="checkout-content">
        <div className="checkout-form">
          <h3>Información de Contacto</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Dirección de envío *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows="3"
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary checkout-btn"
              disabled={loading}
            >
              {loading ? 'Procesando...' : 'Confirmar Orden'}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h3>Resumen de la Orden</h3>
          <div className="order-items">
            {cart.map((item) => (
              <div key={item.id} className="order-item">
                <div className="order-item-info">
                  <h4>{item.name}</h4>
                  <p>Cantidad: {item.quantity}</p>
                </div>
                <div className="order-item-price">
                  ${item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-total">
            <h3>Total: ${getTotalPrice()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
