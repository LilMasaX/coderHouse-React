import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="item-image"
      />
      <div className="item-info">
        <h3 className="item-title">{product.name}</h3>
        <p className="item-price">${product.price}</p>
        <p className="item-stock">Stock: {product.stock}</p>
        <Link 
          to={`/item/${product.id}`} 
          className="item-detail-link"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item; 