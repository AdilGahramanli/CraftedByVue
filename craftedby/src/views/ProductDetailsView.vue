<script setup>

</script>

<template>
<!--Titre-->
<!--  nom de l'article-->
<!--  photos de l'article-->
<!--  prix, quantité réglable, couleur réglable-->
<!--  bouton ajouter au panier-->
<!--  description complète-->
<!--  <div v-for="store in stores" :key="store.id" class="store">-->
<!--    <ul>-->
<!--      <li class="m-12 flex w-full items-center">-->
<!--        <h1 class="text-4xl">{{ store.name }}</h1>-->
<!--        <div v-for="product in store.products" :key="product.id" class="product">-->

<!--          <ul>-->
<!--            <li>-->
<!--              <div class="card-body w-50 border-solid hover:border-2 hover:shadow-lg m-2 ">-->
<!--                <h2 class="card-title text-3xl text-center">{{ product.name }}</h2>-->
<!--                <figure><img class="w-113" :src="`../src/assets/products/${product.image_name}`" alt="image of product"></figure>-->
<!--                <p class="text-center">{{ product.description }}</p>-->
<!--                <p class="text-center"><strong>Category:</strong> {{ product.category }}</p>-->
<!--                <p class="text-center"><strong>Price:</strong> {{ product.price }} €</p>-->
                <div class="card-actions">
                  <button class="btn btn-primary" @click="cartStore.add(product.id)">
                    Add to Cart
                  </button>
                </div>


<!--              </div>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->

<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
</template>

<style scoped>

</style>