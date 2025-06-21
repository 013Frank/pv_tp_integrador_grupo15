import { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const initialFormState = {
  title: '',
  price: '',
  description: '',
  category: '',
  image: ''
};

const ProductForm = () => {
  const { addProduct, updateProduct, products } = useContext(ProductsContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const editingProduct = useMemo(
    () => products.find(p => p.id === id),
    [products, id]
  );

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        title: editingProduct.title || '',
        price: editingProduct.price || '',
        description: editingProduct.description || '',
        category: editingProduct.category || '',
        image: editingProduct.image || ''
      });
    } else {
      setFormData(initialFormState);
    }
  }, [editingProduct]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.price) return;
    const productData = {
      ...formData,
      price: Number(formData.price)
    };
    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
    } else {
      addProduct({ ...productData, id: Date.now().toString() });
    }
    navigate('/');
  }, [formData, editingProduct, updateProduct, addProduct, navigate]);

  return (
    <Box
      maxWidth={600}
      margin="auto"
      padding={2}
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Typography variant="h4" gutterBottom>
        {editingProduct ? 'Editar Producto' : 'Crear Nuevo Producto'}
      </Typography>
      <TextField
        fullWidth
        label="Título"
        name="title"
        value={formData.title}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Precio"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        margin="normal"
        required
        inputProps={{ min: 0, step: "any" }}
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
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ marginTop: 2 }}
      >
        Guardar
      </Button>
    </Box>
  );
};

export default ProductForm;