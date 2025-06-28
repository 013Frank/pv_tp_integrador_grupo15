import { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = formData;

    // Buscar usuarios en localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return setError('Credenciales inválidas.');
    }

    // Guardar sesión
    login ({ email });
    
    // Redirigir
    navigate('/');
  };

  return (
    <Box maxWidth={400} mx="auto" mt={4} component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>Iniciar Sesión</Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <TextField
        fullWidth
        label="Correo Electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Contraseña"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Ingresar
      </Button>
    </Box>
  );
};

export default LoginForm;
