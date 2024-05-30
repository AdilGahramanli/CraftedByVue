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
// const productIndex = route.params.id
// const selectedStore = store[storeIndex]["products"]
// const selectedProduct = selectedStore[productIndex]

</script>

<template>
  <p>{{productSelected}}</p>
<!--  <p class="text-xl text-center">{{selectedProduct.name}}</p>-->
<!--  <figure><img class="w-113" :src="`./src/assets/products/${selectedProduct.image_name}`" alt="image of product"></figure>-->
<!--  <p class="text-center">{{selectedProduct.description}}</p>-->
<!--  <p class="text-center">{{selectedProduct.price}} €</p>-->
<!--  <div class="card-actions">-->
<!--    <button class="btn btn-primary" @click="cartStore.addToCart(selectedProduct)">-->
<!--      Add to Cart-->
<!--    </button>-->

<!--  </div>-->



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