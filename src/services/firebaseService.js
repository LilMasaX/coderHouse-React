import { collection, getDocs, getDoc, doc, query, where, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

// Obtener todos los productos desde Firestore
export const getProducts = async () => {
  try {
    const productsCol = collection(db, 'products');
    const productsSnap = await getDocs(productsCol);
    return productsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

// Obtener producto por ID desde Firestore
export const getProductById = async (id) => {
  try {
    const productRef = doc(db, 'products', id);
    const productSnap = await getDoc(productRef);
    if (productSnap.exists()) {
      return { id: productSnap.id, ...productSnap.data() };
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    console.error('Error getting product:', error);
    throw error;
  }
};

// Obtener productos por categoría desde Firestore
export const getProductsByCategory = async (category) => {
  try {
    const productsCol = collection(db, 'products');
    const q = query(productsCol, where('category', '==', category));
    const productsSnap = await getDocs(q);
    return productsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting products by category:', error);
    throw error;
  }
};

// Crear una orden en Firestore
export const createOrder = async (orderData) => {
  try {
    const ordersCol = collection(db, 'orders');
    const docRef = await addDoc(ordersCol, {
      ...orderData,
      date: serverTimestamp()
    });
    console.log('Orden creada exitosamente:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};