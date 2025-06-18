import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Cambia la carga desde API por carga desde JSON en public/
    fetch('/productos.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error cargando productos desde JSON:", err));
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const addProduct = (product) => {
    setProducts(prev => [...prev, { id: Date.now().toString(), ...product }]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    setFavorites(prev => prev.filter(fid => fid !== id));
  };

  return (
    <ProductsContext.Provider value={{
      products,
      favorites,
      toggleFavorite,
      addProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </ProductsContext.Provider>
  );
};