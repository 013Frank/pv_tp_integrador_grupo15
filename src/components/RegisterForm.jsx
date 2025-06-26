import { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
    setSuccess('');
  };

  const validateEmail = email => {
    // Validación básica de email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    // Validaciones
    if (!validateEmail(email)) {
      return setError('Correo electrónico no válido.');
    }
    if (password.length < 6) {
      return setError('La contraseña debe tener al menos 6 caracteres.');
    }
    if (password !== confirmPassword) {
      return setError('Las contraseñas no coinciden.');
    }

    // Guardar en localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.email === email);
    if (userExists) {
      return setError('Este correo ya está registrado.');
    }

    const newUser = { email, password };
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

    setSuccess('Usuario registrado con éxito.');
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <Box maxWidth={400} mx="auto" mt={4} component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>Registro de Usuario</Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

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
      <TextField
        fullWidth
        label="Confirmar Contraseña"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Registrarse
      </Button>
    </Box>
  );
};

export default RegisterForm;