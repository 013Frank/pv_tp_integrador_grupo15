import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductFormPage from './pages/ProductFormPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import Header from './components/Header'; 

function App() {
  return (
    <>
      <Header />
      <Container style={{ marginTop: 20 }}>
        <Routes>
          {/* Rutas privadas */}
          <Route path="/" element={
            <PrivateRoute><Home /></PrivateRoute>
          } />
          <Route path="/favorites" element={
            <PrivateRoute><FavoritesPage /></PrivateRoute>
          } />
          <Route path="/product/:id" element={
            <PrivateRoute><ProductDetailPage /></PrivateRoute>
          } />
          <Route path="/add" element={
            <PrivateRoute><ProductFormPage /></PrivateRoute>
          } />
          <Route path="/edit/:id" element={
            <PrivateRoute><ProductFormPage /></PrivateRoute>
          } />

          {/* Rutas públicas */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
