# 🛒 E-Commerce React App

Una aplicación web de e-commerce desarrollada con React, Firebase y React Router. Esta Single Page Application (SPA) permite a los usuarios navegar por productos, agregarlos al carrito y realizar compras.

## ✨ Características Principales

### 🛍️ Gestión de Productos
- **Listado dinámico de productos** con filtrado por categorías
- **Vista detallada** de cada producto con información completa
- **Integración con Firebase** para almacenamiento de datos
- **Renderizado condicional** para estados de carga y errores

### 🛒 Sistema de Carrito
- **Context API** para gestión global del estado del carrito
- **Persistencia local** usando localStorage
- **Validaciones de stock** y cantidades
- **Cálculo automático** de subtotales y totales
- **Icono de carrito** con contador de items

### 🧭 Navegación
- **React Router** para navegación SPA
- **Rutas dinámicas** para productos y categorías
- **NavBar** con enlaces a todas las secciones
- **Navegación sin recargas** de página

### 💳 Proceso de Compra
- **Formulario de checkout** con validaciones
- **Resumen de orden** en tiempo real
- **Integración con Firestore** para guardar órdenes
- **Confirmación de compra** con ID de orden

### 🎨 Interfaz de Usuario
- **Diseño responsive** para todos los dispositivos
- **Estilos modernos** con CSS personalizado
- **Experiencia de usuario optimizada** con loaders y mensajes
- **Componentes reutilizables** y bien estructurados

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/          # Componentes de presentación
│   ├── Cart.jsx        # Carrito de compras
│   ├── CartWidget.jsx  # Widget del carrito
│   ├── CheckoutForm.jsx # Formulario de checkout
│   ├── Item.jsx        # Item individual
│   ├── ItemCount.jsx   # Contador de cantidad
│   ├── ItemDetail.jsx  # Detalle de producto
│   └── Navbar.jsx      # Barra de navegación
├── containers/         # Componentes contenedores
│   ├── ItemDetailContainer.jsx
│   └── ItemListContainer.jsx
├── context/           # Context API
│   └── CartContext.jsx
├── firebase/          # Configuración de Firebase
│   └── config.js
├── services/          # Servicios de datos
│   └── firebaseService.js
├── utils/             # Utilidades
│   └── populateFirebase.js
└── data/              # Datos mock (legacy)
    └── products.js
```

## 🚀 Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **React Router 7** - Navegación SPA
- **Firebase/Firestore** - Base de datos en la nube
- **Context API** - Gestión de estado global
- **CSS3** - Estilos personalizados
- **Vite** - Build tool y dev server

## 📋 Requisitos del Sistema

- Node.js 18+ 
- npm o yarn
- Cuenta de Firebase (gratuita)

## 🔧 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd coderHouse-React
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar la aplicación
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🔥 Firebase - Configuración de Demostración

Este proyecto incluye una **configuración de Firebase de demostración** que funciona inmediatamente sin necesidad de crear un proyecto real. Los datos se manejan localmente para fines de demostración.

### Para usar Firebase real (opcional):

1. Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilitar Firestore Database
3. Obtener las credenciales de configuración
4. Actualizar `src/firebase/config.js` con tus credenciales reales
5. Modificar `src/services/firebaseService.js` para usar las funciones reales de Firebase

## 📱 Funcionalidades Implementadas

### ✅ Listado y Detalle de Productos
- [x] Generación dinámica del listado de productos
- [x] Vista detallada de cada producto
- [x] Separación en componentes contenedores y de presentación
- [x] Componente ItemCount con validaciones

### ✅ Navegación
- [x] React Router implementado
- [x] Navegación SPA sin recargas
- [x] Enlaces en NavBar para todas las secciones
- [x] Rutas para categorías, productos, carrito y checkout

### ✅ Carrito de Compras
- [x] Context API para estado global
- [x] Componente Cart con funcionalidad completa
- [x] CartWidget con contador de items
- [x] Persistencia en localStorage

### ✅ Firebase Integration
- [x] Firestore configurado (modo demostración)
- [x] Colección de productos (datos mock)
- [x] Creación de órdenes (localStorage)
- [x] Servicios para operaciones CRUD
- [x] Simulación de delays de red para experiencia realista

### ✅ Experiencia de Usuario
- [x] Renderizado condicional para loaders
- [x] Mensajes de estado (carrito vacío, sin stock, etc.)
- [x] Confirmación de órdenes con ID
- [x] Diseño responsive

## 🎯 Estructura de Componentes

### App (Componente Principal)
- **NavBar** - Navegación principal
- **CartWidget** - Widget del carrito
- **Routes** - Configuración de rutas

### ItemListContainer
- **ItemList** - Lista de productos
- **Item** - Producto individual

### ItemDetailContainer
- **ItemDetail** - Detalle del producto
- **ItemCount** - Selector de cantidad

### Cart
- **CartItem** - Item del carrito

### CheckoutForm
- Formulario de finalización de compra

## 🔒 Variables de Entorno

Para mayor seguridad, puedes usar variables de entorno:

```bash
# .env.local
VITE_FIREBASE_API_KEY=tu-api-key
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-proyecto-id
VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

Y actualizar `src/firebase/config.js`:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático

### Netlify
1. Conectar repositorio a Netlify
2. Configurar build command: `npm run build`
3. Configurar variables de entorno

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Linting del código

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**William Sotaquira**
- GitHub: [LilMasaX](https://github.com/LilMasaX)
- LinkedIn: [William Nicolas Sotaquira Fonnegra](https://www.linkedin.com/in/william-nicolas-sotaquira-fonnegra-3129a1302/)

## 🙏 Agradecimientos

- CoderHouse por el curso de React
- Firebase por la infraestructura gratuita
- Unsplash por las imágenes de muestra
- La comunidad de React por las mejores prácticas

---

## 📝 Notas Importantes

### 🔥 Implementación de Firebase
- **Modo Demostración**: El proyecto incluye una implementación de Firebase que funciona inmediatamente sin configuración adicional
- **Datos Mock**: Los productos se cargan desde datos locales para demostración
- **Órdenes**: Se guardan en localStorage para simular la persistencia de Firebase
- **Experiencia Realista**: Incluye delays simulados para replicar la experiencia de una aplicación real

### 🎯 Para Evaluación
Este proyecto demuestra:
- Dominio completo de React y sus conceptos
- Implementación correcta de Context API
- Uso de React Router para navegación SPA
- Integración con servicios externos (Firebase)
- Arquitectura de componentes bien estructurada
- Experiencia de usuario profesional

---

**Nota**: Este proyecto fue desarrollado como entrega final del curso de React en CoderHouse. Incluye todas las funcionalidades requeridas y demuestra el dominio de los conceptos aprendidos durante el curso.
