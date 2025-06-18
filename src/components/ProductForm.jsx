import { useState, useEffect, useContext } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const ProductForm = () => {
  const { addProduct, updateProduct, products } = useContext(ProductsContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const editingProduct = products.find(p => p.id === id);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        title: editingProduct.title,
        price: editingProduct.price,
        description: editingProduct.description,
        category: editingProduct.category,
        image: editingProduct.image
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (editingProduct) {
      updateProduct(editingProduct.id, formData);
    } else {
      addProduct({ ...formData, id: Date.now().toString() });
    }
    navigate('/');
  };

  return (
    <Box maxWidth={600} margin="auto" padding={2}>
      <Typography variant="h4" gutterBottom>
        {editingProduct ? 'Editar Producto' : 'Crear Nuevo Producto'}
      </Typography>
      <TextField
        fullWidth
        label="Titulo"
        name="title"
        value={formData.title}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Precio"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Descripción"
        name="description"
        multiline
        rows={4}
        value={formData.description}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Categoría"
        name="category"
        value={formData.category}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Imagen URL"
        name="image"
        value={formData.image}
        onChange={handleChange}
        margin="normal"
      />

      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginTop: 2 }}>
        Guardar
      </Button>
    </Box>
  );
};

export default ProductForm;