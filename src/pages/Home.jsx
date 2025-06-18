import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Typography variant="h3" gutterBottom>Listado de Productos</Typography>
      <Grid container>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
};

export default Home;