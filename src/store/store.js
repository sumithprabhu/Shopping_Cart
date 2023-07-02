import create from 'zustand';
import products from '../dummy_data/Product'
export const useStore = create((set) => ({
  cartItems: [],
  totalPrice: 0,
  addToCart: async (productId) => {
    // const response = await fetch(`/products.json`);
    // const products = await response.json();
    
    const product = products.find((p) => p.id === productId);
    set((state) => ({
      cartItems: [...state.cartItems, product],
      totalPrice: state.totalPrice + product.price,
    }));
  },
}));