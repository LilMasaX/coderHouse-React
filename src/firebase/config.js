import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase de ejemplo para el proyecto
// En un proyecto real, estas credenciales vendrían de tu proyecto de Firebase
const firebaseConfig = {
  apiKey: "demo-api-key-for-bootcamp",
  authDomain: "demo-project.firebaseapp.com",
  projectId: "demo-ecommerce-bootcamp",
  storageBucket: "demo-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:demo123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Nota: Esta es una configuración de demostración
// Para usar Firebase real, necesitarías crear un proyecto en Firebase Console
// y reemplazar estas credenciales con las tuyas propias
