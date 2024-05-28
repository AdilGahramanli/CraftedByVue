<template>
<!--  la div concept présente une image avec un dégradé. Un texte par dessus qui est cliquable.-->
<!--  la div stores est un menu déroulant.-->
<!--  la div produits est une image cliquable qui s'anime avec un hover
produits est faite en priorité avec un lien cliquable vers produits-->

<!--  la div devenez un vendeur est comme la div concept-->

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