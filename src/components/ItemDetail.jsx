import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  const handleAddToCart = (quantity) => {
    alert(`Se agregaron ${quantity} unidades de ${product.name} al carrito`);
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
        
        <ItemCount 
          stock={product.stock} 
          onAdd={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ItemDetail; 