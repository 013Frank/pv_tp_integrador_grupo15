import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';

const FavoritesPage = () => {
  const { items: products, favorites } = useSelector(state => state.products);
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  if (favoriteProducts.length === 0)
    return <Typography>No tienes productos favoritos.</Typography>;

  return (
    <>
      <Typography variant="h4" gutterBottom>Productos Favoritos</Typography>
      <Grid container>
        {favoriteProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Grid>
    </>
  );
};

export default FavoritesPage;