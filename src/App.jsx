import { Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Button } from '@mui/material';

import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductFormPage from './pages/ProductFormPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/favorites">
            Favoritos
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Agregar Producto
          </Button>
          <Button color="inherit" component={Link} to="/register">
          Registro
          </Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/add" element={<ProductFormPage />} />
          <Route path="/edit/:id" element={<ProductFormPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
