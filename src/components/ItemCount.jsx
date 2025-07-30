import { useState } from 'react';

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="item-count">
      <div className="count-controls">
        <button 
          onClick={decrement} 
          disabled={count <= 1}
          className="count-btn"
        >
          -
        </button>
        <span className="count-display">{count}</span>
        <button 
          onClick={increment} 
          disabled={count >= stock}
          className="count-btn"
        >
          +
        </button>
      </div>
      <button 
        onClick={handleAddToCart}
        className="add-to-cart-btn"
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
      <p className="stock-info">Stock disponible: {stock}</p>
    </div>
  );
};

export default ItemCount; 