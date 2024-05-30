<script setup>

import { useRoute } from 'vue-router'
import {ref} from 'vue'
// import { useFetch } from '@vueuse/core'
import { stores } from '../../public/stores.json'
import {useCartStore} from '@/stores/cart.js'
// import {createPinia} from 'pinia'

const cartStore = useCartStore()

 // const { data : product } = useFetch("https://fakestoreapi.com/products/"+useRoute().params.id).json()
const route = useRoute()
const productSelected=ref(null)
// const store = stores
const productId =  route.params.id
fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(res=>res.json())
  .then(json=>productSelected.value=json)

</script>

<template>
<!--  <p>{{productSelected}}</p>-->
<!--  <p>{{productSelected.title}}</p>-->
<!--  <p>{{productSelected.image}}</p>-->

<!--  <div  class="p-12">-->
<!--    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">-->
<!--      <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">-->
<!--        <div v-for="product in productSelected" :key="product.id" class="card-body border-solid hover:border-2 hover:shadow-lg m-2 w-30 box-border">-->
          <h2 class="card-title text-3xl text-center box-border">{{ productSelected.title }}</h2>
          <figure class="w-32"><img  :src="productSelected.image" alt="image of product"></figure>
          <p class="text-center box-border">{{ productSelected.description }}</p>
          <p class="text-center box-border"><strong>Category:</strong> {{ productSelected.category }}</p>
          <p class="text-center box-border"><strong>Price:</strong> {{ productSelected.price }} €</p>
          <div class="grid grid-cols-2 items-center align-baseline">
            <button class="btn btn-primary bg-gray-300 self-center box-border mx-5" @click="cartStore.addToCart(productSelected)">
              Add to Cart
            </button>
            </div>


</template>

<style scoped>

</style>