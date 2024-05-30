import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state:() => ({
    cart:[]
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(index) {
      this.cart.splice(index);
    }
  },
  getters: {
    getAllCartProductsToString: (state) => {
      return state.cart;
    }
  }
})

