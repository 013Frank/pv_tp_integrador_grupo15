import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  return <ProductDetail />;
};

export default ProductDetailPage;