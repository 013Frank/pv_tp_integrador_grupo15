# pv_tp_integrador_grupo15

* Franco German Cruz - usuario: 013Frank
* Armella Julian - ususario:Jul772
* Siomara Jael Guanca Venicio - usuario: siomaraven
* Sofia Guadalupe Cabana - usuario : sofiii3
* Marcos Alejandro Nicolás Chavarria - usuario : NiVerenC

## Autenticación de Usuarios - Trabajo Práctico Integrador (Parte 2)

Esta parte del proyecto fue desarrollada para incorporar autenticación simulada de usuarios utilizando React. No se utilizó backend, sino `localStorage`, `React Context`, y `React Router` para manejar el flujo completo de registro, login, logout y rutas protegidas.

---

###  Funcionalidades implementadas

#### ✅ Registro de Usuario
- Vista `/register` con un formulario que incluye:
  - Correo electrónico
  - Contraseña
  - Confirmar contraseña
- Validaciones:
  - Formato válido de email
  - Contraseña ≥ 6 caracteres
  - Coincidencia entre ambas contraseñas
  - Rechazo de emails ya registrados
- Los datos se guardan en `localStorage` bajo la clave `"users"` (array de objetos).
- Al registrarse, se redirige al login con notificación de éxito.

#### ✅ Inicio de Sesión (`/login`)
- Formulario de login con email y contraseña.
- Validación contra usuarios guardados en `localStorage`.
- Si las credenciales coinciden:
  - Se guarda el usuario en `"sessionUser"` (también en `localStorage`)
  - Se redirige a la home (`/`)
  - Se actualiza el estado global a través de `AuthContext`
- Si no coinciden: se muestra error de credenciales inválidas.

#### ✅ Mantenimiento de Sesión
- Al recargar la página, el contexto rehidrata la sesión desde `localStorage`.
- Esto evita que el usuario tenga que volver a iniciar sesión tras un refresh.

#### ✅ Cierre de Sesión
- Se muestra el mensaje: `Bienvenido, <nombre>` en el NavBar.
- Botón "Cerrar sesión" que:
  - Limpia `sessionUser` del `localStorage`
  - Reinicia el estado de usuario en el contexto
  - Redirige a `/login`

#### ✅ Rutas Protegidas
- Se creó un componente `<PrivateRoute />` que verifica si hay usuario logueado.
- Las rutas `/`, `/favorites`, `/product/:id`, `/add`, `/edit/:id` están protegidas.
- Si el usuario no está autenticado, se redirige automáticamente a `/login`.
- Mientras se carga el estado (`loading`), se muestra un `Spinner`.

---

### Tecnologías usadas

- **React**
- **React Router DOM v6**
- **Context API**
- **Material UI (MUI)**
- **localStorage**
- **Vite** como bundler