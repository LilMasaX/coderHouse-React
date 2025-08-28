import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/firebaseService';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <h2>Cargando producto...</h2>
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

  if (!product) {
    return (
      <div className="error">
        <h2>Producto no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer; 