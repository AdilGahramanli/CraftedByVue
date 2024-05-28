<script setup>
//Afficher pop up "achat effectué" si achat payé.
import axios from 'axios';

// eslint-disable-next-line vue/no-export-in-script-setup
import ProductList from '../components/ProductList.vue';

</script>

<template>
<h1 class="text-5xl">Stores and Products</h1>
<!--  //Menu filtes-->


<!--  //Card products dans un carrousel, ils sont par 4.-->
<!--  //Card comprenant une photo, une description, un prix, la possibilité de voir les détails et pouvoir payer-->

<!--  <div v-for="store in stores" :key="store.id" class="store card w-96 bg-base-100 shadow-xl">-->
<!--    <figure><img src="../assets/products/beaded_necklace.png" alt="Shoes" /></figure>-->
<!--    <div class="card-body">-->
<!--      <h2 class="card-title">Shoes!</h2>-->
<!--      <p>If a dog chews shoes whose shoes does he choose?</p>-->
<!--      <div class="card-actions justify-end">-->
<!--        <button class="btn btn-primary">Buy Now</button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <div id="app">
    <ProductList/>
  </div>

</template>

<style scoped>

</style>