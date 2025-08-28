import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../services/firebaseService';
import Item from '../components/Item';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const fetchProducts = async () => {
      try {
        let data;
        if (categoryId) {
          data = await getProductsByCategory(categoryId);
        } else {
          data = await getProducts();
        }
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="loading">
        <h2>Cargando productos...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <h2>
        {categoryId 
          ? `Productos - ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`
          : 'Todos los productos'
        }
      </h2>
      <div className="item-grid">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 && (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer; 