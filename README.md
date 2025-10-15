# 🍔 E-commerce de Restaurante con Entrega Local (Vite + React + Google Maps API)

**Autor:** [Reimer Alexander Campos Hernández](https://www.linkedin.com/in/reimer-campos-b04406268)  
**Correo:** camposreimer@gmail.com  
**Portafolio:** [https://portafolio-o1h3.vercel.app](https://portafolio-o1h3.vercel.app)  
**Proyecto desplegado:** [https://restaurant-bs76.vercel.app](https://restaurant-bs76.vercel.app)

---

## 🚀 Descripción

Este proyecto es un **e-commerce de restaurante** desarrollado con **Vite + React + TypeScript + TailwindCSS**, enfocado en ofrecer una experiencia moderna, rápida y atractiva para los usuarios que desean realizar pedidos online.

El sistema permite al cliente **explorar productos**, **añadirlos al carrito**, **ver la distancia de entrega en un mapa interactivo** (con Google Maps API) y **confirmar si su dirección se encuentra dentro del radio de entrega** (5 km en este caso).

---

## 🧩 Características principales

- 🛍️ **Catálogo dinámico** de productos con imágenes, precios y descripciones.  
- ➕ **Carrito de compras interactivo** con control de cantidad y eliminación de ítems.  
- 🗺️ **Integración con Google Maps API** para autocompletar direcciones y calcular distancia al restaurante.  
- 📍 **Verificación automática del radio de entrega (5km)** en base a la ubicación del usuario.  
- ⚡ **Interfaz moderna y responsiva** creada con TailwindCSS.  
- 🔥 **Diseño visual atractivo** con animaciones, gradientes y tipografía profesional.  
- 💬 **Pedidos directos por WhatsApp** (listos para implementar en siguientes versiones).

---

## 🏗️ Tecnologías utilizadas

| Categoría | Tecnologías |
|------------|--------------|
| **Frontend** | React + Vite + TypeScript |
| **Estilos** | TailwindCSS |
| **Iconos** | Lucide React |
| **Mapas y direcciones** | Google Maps JavaScript API (Autocomplete + Distance Matrix) |
| **Despliegue** | Vercel |

---

## ⚙️ Configuración del entorno

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/restaurant-app.git
   cd restaurant-app
Instalar dependencias:

bash
Copiar código
npm install
Crear un archivo .env en la raíz del proyecto con tu API Key de Google Maps:

bash
Copiar código
VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
Ejecutar el proyecto en modo desarrollo:

bash
Copiar código
npm run dev
Abrir en el navegador:

arduino
Copiar código
http://localhost:5173
🗺️ Funcionalidad de Mapa y Autocompletado
El usuario ingresa su dirección y el sistema muestra sugerencias en tiempo real gracias a Google Places Autocomplete.

Al seleccionar una dirección, se calcula la distancia exacta desde el restaurante (Av. La Plata 417, Caballito, CABA) hasta el punto indicado.

Si la distancia es menor o igual a 5 km, se permite continuar con el pedido; en caso contrario, se muestra una alerta.

📦 Estructura del proyecto
bash
Copiar código
src/
│
├── components/
│   ├── Cart.tsx               # Carrito con autocompletado y verificación de entrega
│   ├── ProductCard.tsx        # Tarjeta de producto
│   └── StoreStatusAlert.tsx   # Indicador de estado del local
│
├── data/
│   └── products.ts            # Lista de productos con imágenes y detalles
│
├── App.tsx                    # Componente principal
└── main.tsx                   # Punto de entrada de la app
🌍 Despliegue
El proyecto fue desplegado con Vercel, optimizado para rendimiento y carga rápida.
🔗 Ver sitio en vivo

💡 Próximas mejoras
🧾 Integrar sistema de pedidos por WhatsApp con resumen automático.

💳 Agregar pasarela de pagos.

🔐 Panel de administración para gestionar productos y precios.

🕒 Control de horarios y estados del local en tiempo real.

🧠 Aprendizajes y objetivos
Este proyecto fue creado con el objetivo de fortalecer habilidades técnicas en React, TypeScript y APIs externas, además de desarrollar un flujo realista de un e-commerce moderno, combinando lógica de negocio con experiencia de usuario (UX/UI).

🌟 Autor
Hecho con ❤️ por Reimer Campos
📧 camposreimer@gmail.com
🚀 Portafolio personal













ChatGPT puede cometer errores. Co
