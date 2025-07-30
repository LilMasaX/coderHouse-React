const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="welcome-message">
        <p>¡Bienvenido a nuestra tienda!</p>
        <p>Aquí encontrarás los mejores productos al mejor precio.</p>
        <p>Próximamente: Catálogo de productos</p>
      </div>
    </div>
  );
};

export default ItemListContainer; 