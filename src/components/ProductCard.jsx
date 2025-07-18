import { Card, CardMedia, CardContent, Typography, IconButton, Button } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/productsSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.products.favorites);
  const isFavorite = favorites.includes(product.id);

  const handleToggleFavorite = () => {
  if (isFavorite) {
    const confirmar = window.confirm("¿Seguro que deseas quitar este producto de favoritos?");
    if (!confirmar) return;
  }
  dispatch(toggleFavorite(product.id));
};

  return (
    <Card sx={{ maxWidth: 345, margin: 2, borderRadius: 4, boxShadow: 6, transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'scale(1.03)', boxShadow: 12 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 420, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', background: '#fff', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 2 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 700, color: '#333', minHeight: 56, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{product.title}</Typography>
        <Typography variant="body1" color="primary" sx={{ fontWeight: 600, fontSize: 20, marginBottom: 1 }}>${product.price}</Typography>
      </CardContent>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
        <IconButton 
          onClick={handleToggleFavorite} 
          sx={{ 
            background: isFavorite ? '#ffeaea' : '#f0f0f0', '&:hover': { 
              background: isFavorite ? '#ffd6d6' : '#e0e0e0' 
            }, 
            boxShadow: 1 
            }}
        >
          {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
        <Button
          component={Link}
          to={`/product/${product.id}`}
          variant="contained"
          size="small"
          sx={{ marginLeft: 2, borderRadius: 3, background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', color: '#fff', fontWeight: 600, boxShadow: 2, '&:hover': { background: 'linear-gradient(90deg, #5a67d8 0%, #6b47b6 100%)' } }}
        >
          Ver más
        </Button>
      </div>
    </Card>
  );
};


export default ProductCard;