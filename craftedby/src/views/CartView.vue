<script setup>
// enlever un article de la liste
// import {} from {"../stores/cart.js"}
import {useCartStore} from '@/stores/cart.js'
const cartStore = useCartStore()
</script>

<template>
  <h2>Mon panier</h2>
  <ul>
    <li v-for="(product, index) in cartStore.getAllCartProductsToString" :key="index">
      <p>{{ product.name }} - {{ product.price }} €</p>
      <button @click="cartStore.removeFromCart(index)">Remove</button>
    </li>
  </ul>


        <RouterLink to="/payment"><button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button></RouterLink>
<!--  {{cartStore.getAllCartProductsToString()}}-->
</template>

