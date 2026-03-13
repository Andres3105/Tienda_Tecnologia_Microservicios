# 🛒 Tienda Tecnológica - CRUD Full Stack

Aplicación web full stack para la gestión de productos de una tienda tecnológica.  
El sistema permite crear, visualizar, editar y eliminar productos, además de subir imágenes asociadas a cada producto.

El proyecto implementa una arquitectura separada entre frontend y backend, comunicándose a través de una API REST.

---

## 🚀 Tecnologías utilizadas

### Frontend
- React
- React Router
- Axios
- Bootstrap

### Backend
- Flask
- Flask-CORS
- SQLAlchemy
- SQLite

### Otras herramientas
- REST API
- FormData para subida de imágenes
- Arquitectura en capas

---

## 🏗 Arquitectura del proyecto

El sistema se encuentra dividido en dos partes principales:
backend/
│
├── app.py
├── config/
│ └── database.py
│
├── models/
│ └── product.py
│
├── controllers/
│ └── product_controller.py
│
├── routes/
│ └── product_routes.py
│
└── uploads/
(frontend)
│
├── src/
│ ├── components/
│ ├── pages/
│ │ ├── ProductList.jsx
│ │ └── ProductForm.jsx
│ │
│ ├── services/
│ │ └── api.js
│ │
│ └── App.jsx


---

## ⚙ Funcionalidades

El sistema permite:

- 📦 Crear productos
- ✏ Editar productos
- ❌ Eliminar productos
- 📋 Listar productos
- 🖼 Subir imágenes de productos
- 💰 Visualizar precios formateados
- 🔗 Comunicación con API REST

---

## 🧩 API REST

| Método | Endpoint | Descripción |
|------|------|------|
| GET | `/products` | Obtener todos los productos |
| GET | `/products/<id>` | Obtener un producto |
| POST | `/products` | Crear producto |
| PUT | `/products/<id>` | Actualizar producto |
| DELETE | `/products/<id>` | Eliminar producto |

---

## 📷 Manejo de imágenes

Las imágenes se cargan usando **FormData** y se almacenan en la carpeta:

backend/uploads


Luego se sirven mediante la ruta:


/uploads/<nombre_imagen>


---

## 🛠 Instalación del proyecto

### 1️⃣ Clonar repositorio

git clone https://github.com/tu-usuario/tienda-tecnologica.git


---

### 2️⃣ Backend

Entrar a la carpeta backend:


cd backend


Instalar dependencias:


pip install flask flask-cors flask-sqlalchemy


Ejecutar servidor:


python app.py


El backend se ejecutará en:


http://localhost:5000


---

### 3️⃣ Frontend

Entrar a la carpeta frontend:


cd frontend


Instalar dependencias:


npm install


Ejecutar aplicación:


npm start


El frontend se ejecutará en:


http://localhost:3000


---

## 🧪 Ejemplo de producto


{
"nombre": "Laptop Gamer",
"descripcion": "Laptop de alto rendimiento",
"precio": 4500000,
"stock": 5,
"imagen": "laptop.jpg"
}


---

## 📌 Características del proyecto

- Arquitectura modular
- Separación frontend/backend
- API REST escalable
- Manejo de subida de archivos
- Componentes reutilizables en React

---

## 👨‍💻 Autor

**Andrés Bohórquez**

Desarrollador en formación enfocado en desarrollo **Full Stack**.

Tecnologías de interés:

- Python
- Java
- React
- Desarrollo Backend
- APIs REST
