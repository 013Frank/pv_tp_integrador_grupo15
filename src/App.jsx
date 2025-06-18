import { Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Button } from '@mui/material';

import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductFormPage from './pages/ProductFormPage';

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
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/add" element={<ProductFormPage />} />
          <Route path="/edit/:id" element={<ProductFormPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
