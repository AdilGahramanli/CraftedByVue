<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import HomeView from '@/views/HomeView.vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<!--  <header class="bg-rose-peau h-20 w-full">-->
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->
<!--      <nav>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--      </nav>-->
<!--  </header>-->
  <header class="w-full">
    <navbar></navbar>
  </header>

  <RouterView></RouterView>

<footer>
  About us - contact Us - Cgv - Politique de confidentialité
</footer>
</template>