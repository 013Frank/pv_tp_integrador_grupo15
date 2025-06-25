import { Favorite, Update } from '@mui/icons-material';
import { accordionActionsClasses } from '@mui/material';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        favorites: [],
        status: 'idle',
    },
    reducers: {
        toggleFavorite(state, action) {
            const id = action.payload;
            state.favorites = state.favorites.includes(id)
            ? state.favorites.filter(favId => favId !== id)
            : [...state.favorites, id];
        },
        addProduct(state, action) {
            const newProduct = { ...action.payload, id: Date.now().toString() };
            state.items.push(newProduct);
        },
        updateProduct(state, action) {
            const { id, data } = action.payload;
            state.items = state.items.map(p => (p.id === id ? { ...p, ...data } : p));
        },
        deleteProduct(state, action) {
            const id = action.payload;
            state.items = state.items.filter(p => p.id !== id);
            state.favorites = state.favorites.filter(favId => favId !== id);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, state => {
                state.status = 'failed';
            });
    },
});

export const {
    toggleFavorite,
    addProduct,
    updateProduct,
    deleteProduct,
} = productsSlice.actions;

export default productsSlice.reducer;