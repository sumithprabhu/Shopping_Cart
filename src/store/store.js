import create from 'zustand';

export const useStore = create((set) => ({
  cartItems: [{ id: 1, name: "Samsung A70", price: 110 ,image:"Samsung2.jpeg"}],
  totalPrice: 0,
  
  addToCart: async (product) => {
    // const response = await fetch(`/products.json`);
    // const products = await response.json();
    
    //const product = products.find((p) => p.id === productId);
    set((state) => ({
      cartItems: [...state.cartItems, product],
      totalPrice: state.totalPrice + product.price,
    }));
  },
}));