import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ProductsProvider> 
        <App />
      </ProductsProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);