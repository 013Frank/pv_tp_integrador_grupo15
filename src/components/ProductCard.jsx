import { Card, CardMedia, CardContent, Typography, IconButton, Button } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

const ProductCard = ({ product }) => {
  const { favorites, toggleFavorite } = useContext(ProductsContext);
  const isFavorite = favorites.includes(product.id);

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <IconButton onClick={() => toggleFavorite(product.id)}>
        {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
      </IconButton>
      <Button component={Link} to={`/product/${product.id}`} variant="contained" size="small" sx={{ margin: 1 }}>
        Ver más
      </Button>
    </Card>
  );
};

export default ProductCard;