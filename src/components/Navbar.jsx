import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h1>Mi Tienda</h1>
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link">
            Todos los productos
          </Link>
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`} 
              className="nav-link"
            >
              {category.name}
            </Link>
          ))}
        </div>
        
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar; 