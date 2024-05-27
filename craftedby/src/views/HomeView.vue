<template>
<h1>home</h1>
  <div class = "bg-fond grid grid-rows-4 gap-2 inline-block align-baseline">
    <div class="h-24 w-3/4 border-solid border-2 bg-fond  border-rose-peau gap-1">
    </div>
    <div class="h-24 w-3/4 border-solid border-2 bg-fond  border-rose-peau gap-1">

    </div>
    <div class="h-24 w-3/4 border-solid border-2 bg-fond  border-rose-peau gap-1">
      <router-link to="products">Produits</router-link>
    </div>
    <div class="h-24 w-3/4 border-solid border-2 bg-fond  border-rose-peau gap-1">

    </div>
  </div>
</template>

<script setup>
// import { useFetch } from '@vueuse/core'
// const { data: products } = useFetch('https://fakestoreapi.com/products?limit=21').json()
// import Navbar from '@/components/Navbar.vue'
// import AccueilCard from '@/components/AccueilCard.vue'
</script>