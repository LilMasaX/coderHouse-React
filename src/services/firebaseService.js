import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

// Datos mock para demostración
const mockProducts = [
  {
    id: "1",
    name: "Laptop Gaming Pro",
    price: 1299.99,
    category: "electronics",
    description: "Potente laptop para gaming con gráficos dedicados RTX 4060, procesador Intel i7 de 13ª generación, 16GB RAM DDR5 y SSD de 1TB. Ideal para gaming y trabajo profesional.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop",
    stock: 10
  },
  {
    id: "2",
    name: "Smartphone Galaxy S23",
    price: 899.99,
    category: "electronics",
    description: "Smartphone de alta gama con cámara de 108MP, procesador Snapdragon 8 Gen 2, 8GB RAM y batería de 5000mAh con carga rápida de 45W.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop",
    stock: 15
  },
  {
    id: "3",
    name: "Auriculares Bluetooth Premium",
    price: 149.99,
    category: "electronics",
    description: "Auriculares inalámbricos con cancelación de ruido activa, batería de 30 horas, carga rápida y sonido Hi-Fi de alta calidad.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
    stock: 25
  },
  {
    id: "4",
    name: "Camiseta Básica Premium",
    price: 29.99,
    category: "clothing",
    description: "Camiseta de algodón 100% orgánico, cómoda y duradera. Disponible en múltiples colores y talles. Perfecta para uso diario.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
    stock: 50
  },
  {
    id: "5",
    name: "Jeans Clásicos Premium",
    price: 79.99,
    category: "clothing",
    description: "Jeans de alta calidad con ajuste perfecto, tela resistente y durabilidad excepcional. Diseño clásico que nunca pasa de moda.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=400&fit=crop",
    stock: 30
  },
  {
    id: "6",
    name: "Zapatillas Deportivas Pro",
    price: 119.99,
    category: "clothing",
    description: "Zapatillas deportivas de alta tecnología con amortiguación avanzada, suela antideslizante y diseño ergonómico para máximo confort.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
    stock: 20
  },
  {
    id: "7",
    name: "Libro de Programación Avanzada",
    price: 49.99,
    category: "books",
    description: "Guía completa de programación en JavaScript, React y Node.js. Incluye proyectos prácticos y mejores prácticas para desarrolladores.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    stock: 12
  },
  {
    id: "8",
    name: "Novela Bestseller Internacional",
    price: 24.99,
    category: "books",
    description: "Novela de ficción que ha conquistado a millones de lectores en todo el mundo. Una historia apasionante que te mantendrá enganchado.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=400&fit=crop",
    stock: 35
  },
  {
    id: "9",
    name: "Monitor Gaming 27\" 4K",
    price: 599.99,
    category: "electronics",
    description: "Monitor gaming de 27 pulgadas con resolución 4K, tasa de refresco de 144Hz, tiempo de respuesta de 1ms y tecnología HDR.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop",
    stock: 8
  },
  {
    id: "10",
    name: "Teclado Mecánico RGB",
    price: 89.99,
    category: "electronics",
    description: "Teclado mecánico con switches Cherry MX, iluminación RGB personalizable, teclas anti-ghosting y diseño ergonómico para gaming.",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop",
    stock: 18
  },
  {
    id: "11",
    name: "Chaqueta Deportiva",
    price: 89.99,
    category: "clothing",
    description: "Chaqueta deportiva con tecnología de transpiración avanzada, impermeabilidad y diseño moderno. Ideal para actividades al aire libre.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop",
    stock: 22
  },
  {
    id: "12",
    name: "Libro de Cocina Gourmet",
    price: 34.99,
    category: "books",
    description: "Colección de recetas gourmet con técnicas avanzadas de cocina, fotos profesionales y consejos de chefs expertos.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&h=400&fit=crop",
    stock: 18
  }
];

// Simulación de Firebase con datos mock
export const getProducts = async () => {
  try {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockProducts;
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 300));
    const product = mockProducts.find(p => p.id === id);
    
    if (product) {
      return product;
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    console.error('Error getting product:', error);
    throw error;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockProducts.filter(product => product.category === category);
  } catch (error) {
    console.error('Error getting products by category:', error);
    throw error;
  }
};

// Para órdenes, usamos localStorage como alternativa a Firebase
export const createOrder = async (orderData) => {
  try {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generar ID único para la orden
    const orderId = 'order_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    const order = {
      id: orderId,
      ...orderData,
      date: new Date().toISOString()
    };
    
    // Guardar en localStorage como alternativa a Firebase
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));
    
    console.log('Orden creada exitosamente:', orderId);
    return orderId;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
