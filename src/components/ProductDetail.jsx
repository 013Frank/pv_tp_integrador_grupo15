import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, favorites, toggleFavorite } = useContext(ProductsContext);

  const product = products.find(p => String(p.id) === String(id));

  if (!product) return <Typography>Producto no encontrado</Typography>;

  const isFavorite = favorites.includes(product.id);

  const handleToggleFavorite = () => {
    toggleFavorite(product.id);
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h4">{product.title}</Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          ${product.price}
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>Categoría: {product.category}</Typography>
      </CardContent>
      <IconButton onClick={handleToggleFavorite} aria-label="favorito">
        {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
      </IconButton>
      <Button
        variant="contained"
        onClick={() => navigate(`/edit/${product.id}`, { state: { product } })}
        sx={{ marginLeft: 2 }}
      >
        Editar
      </Button>
    </Card>
  );
};

export default ProductDetail;