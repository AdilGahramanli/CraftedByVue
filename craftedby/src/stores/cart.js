import { defineStore } from 'pinia'
// Define a Pinia store named 'cart'
export const useCartStore = defineStore('cart', {
  // State: Defines the initial state of the cart, which is an empty array
  state:() => ({
    cart:[]
  }),
  // Actions: Methods to manipulate the state of the cart
  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(idx) {
      this.cart.splice(idx,1 );
    }
  },
  // Getters: Computed properties to derive and return specific state information
  getters: {
    getAllCartProductsToString: (state) => {
      return state.cart;
    }
  },
  // Enable persistence of the cart state
    persist: true
})

