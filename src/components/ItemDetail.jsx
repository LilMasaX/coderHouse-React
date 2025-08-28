import { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    setAddedToCart(true);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-image">
        <img 
          src={product.image} 
          alt={product.name} 
          className="detail-image"
        />
      </div>
      <div className="item-detail-info">
        <h2 className="detail-title">{product.name}</h2>
        <p className="detail-price">${product.price}</p>
        <p className="detail-description">{product.description}</p>
        <p className="detail-stock">Stock disponible: {product.stock}</p>
        
        {!addedToCart ? (
          <ItemCount 
            stock={product.stock} 
            onAdd={handleAddToCart}
          />
        ) : (
          <div className="added-to-cart-message">
            <p>¡Producto agregado al carrito!</p>
            <button 
              onClick={() => setAddedToCart(false)}
              className="btn-secondary"
            >
              Agregar más
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail; 