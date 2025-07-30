# Entrega 2: Navega las rutas

## 📋 Descripción
Segunda entrega del proyecto e-commerce desarrollado con React. Se implementó la funcionalidad completa de routing y navegación entre diferentes vistas de la tienda.

## ✅ Funcionalidades Implementadas

### **1. React Router y Navegación**
- ✅ **Rutas implementadas** con React Router
- ✅ **Navegación entre vistas** (catálogo, categorías, detalle)
- ✅ **Ruta 404** para manejar páginas no encontradas
- ✅ **useParams()** para leer parámetros de URL

### **2. Componentes Contenedores**
- ✅ **ItemListContainer** (`src/containers/ItemListContainer.jsx`)
  - Maneja estado y efectos
  - Llamadas asíncronas con Promises
  - Filtrado por categorías
  - Estados de loading y error

- ✅ **ItemDetailContainer** (`src/containers/ItemDetailContainer.jsx`)
  - Maneja estado y efectos
  - Obtiene producto específico por ID
  - Estados de loading y error

### **3. Componentes de Presentación**
- ✅ **Item** (`src/components/Item.jsx`)
  - Muestra cada producto en el listado
  - Usa Array.map() con prop "key"
  - Link para navegar al detalle

- ✅ **ItemDetail** (`src/components/ItemDetail.jsx`)
  - Muestra detalle completo del producto
  - **ItemCount integrado** (como recomienda la consigna)
  - Interfaz para agregar al carrito

- ✅ **ItemCount** (`src/components/ItemCount.jsx`)
  - Contador para seleccionar cantidad
  - Botones +/- y agregar al carrito
  - Validación de stock

### **4. Navegación por Categorías**
- ✅ **Menú dinámico** con categorías disponibles
- ✅ **Filtrado automático** según categoría seleccionada
- ✅ **Una sola ruta** `/category/:categoryId` (no rutas duplicadas)
- ✅ **useParams()** para leer categoryId de la URL

## 🏗️ Estructura de Rutas

```
/                           → Catálogo principal (todos los productos)
/category/:categoryId       → Productos filtrados por categoría
/item/:id                  → Detalle de un producto específico
/*                         → Página 404 (rutas no encontradas)
```

## 🎯 Requisitos Cumplidos

### **React Router y Rutas**
- ✅ Implementación de React Router
- ✅ Creación de todas las rutas necesarias
- ✅ Ruta 404 para manejo de errores

### **División de Componentes**
- ✅ **Contenedores**: ItemListContainer, ItemDetailContainer
  - Manejan estado y efectos
  - Llamadas asíncronas con Promises
  - useParams() para leer URL

- ✅ **Presentación**: Item, ItemDetail, ItemCount
  - Estructura visual y estilos
  - classNames y elementos

### **Funcionalidades Específicas**
- ✅ **Llamadas asíncronas** con Promises y delays simulados
- ✅ **Array.map()** con prop "key" para listar productos
- ✅ **useParams()** en useEffect para actualizaciones al navegar
- ✅ **ItemCount integrado** en ItemDetail
- ✅ **Una sola ruta dinámica** para categorías

## 🚀 Cómo Ejecutar

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador:
```
http://localhost:5173
```

## 📱 Funcionalidades de Navegación

### **Catálogo Principal**
- URL: `/`
- Muestra todos los productos
- Grid responsive con tarjetas de productos

### **Filtrado por Categorías**
- URL: `/category/electronics`, `/category/clothing`, `/category/books`
- Filtra productos automáticamente
- Título dinámico según categoría

### **Detalle de Producto**
- URL: `/item/1`, `/item/2`, etc.
- Vista completa del producto
- Contador para agregar al carrito
- Información detallada

### **Navegación**
- Menú superior con categorías
- Enlaces en cada producto para ver detalle
- Navegación fluida entre vistas

## 🎨 Características Técnicas

### **Estados y Efectos**
```jsx
// ItemListContainer
useEffect(() => {
  setLoading(true);
  getProducts(categoryId)
    .then((data) => setProducts(data))
    .catch((err) => setError(err.message));
}, [categoryId]); // Dependencia en parámetros URL

// ItemDetailContainer
useEffect(() => {
  getProductById(id)
    .then((data) => setProduct(data))
    .catch((err) => setError(err.message));
}, [id]); // Dependencia en parámetros URL
```

### **Llamadas Asíncronas**
```jsx
// Simulación de API con delays
export const getProducts = (category = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Lógica de filtrado
      resolve(filteredProducts);
    }, 1000);
  });
};
```

### **Array.map() con Key**
```jsx
{products.map((product) => (
  <Item key={product.id} product={product} />
))}
```

## 🔄 Próximos Pasos

- Implementación del carrito de compras
- Persistencia de datos
- Sistema de búsqueda
- Filtros avanzados

---

**Desarrollado por:** William Sotaquira  
**Fecha:** Julio 2024  
**Tecnologías:** React, React Router, Vite, CSS3 