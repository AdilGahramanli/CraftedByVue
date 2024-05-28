
<template>
  <div v-for="store in stores" :key="store.id" class="store">
    <ul>
      <li class="m-12 flex w-full items-center">
        <h1 class="text-4xl">{{ store.name }}</h1>
        <div v-for="product in store.products" :key="product.id" class="product">

          <ul>
            <li>
              <div class="card-body w-50 border-solid hover:border-2 hover:shadow-lg m-2 ">
                <h2 class="card-title text-3xl text-center">{{ product.name }}</h2>
                <figure><img class="w-113" :src="`../src/assets/products/${product.image_name}`" alt="image of product"></figure>
                <p class="text-center">{{ product.description }}</p>
                <p class="text-center"><strong>Category:</strong> {{ product.category }}</p>
                <p class="text-center"><strong>Price:</strong> {{ product.price }} €</p>
                <div class="card-actions">
                  <button class="btn btn-primary" @click="cartStore.add(product.id)">
                    Add to Cart
                  </button>
                </div>
                <button class=" border-solid bg-emerald-300 self-center">View Details</button>

              </div>
            </li>
          </ul>
        </div>

      </li>
    </ul>
  </div>





<!--<div v-for="store in stores" :key="store.id" class="store">-->
<!--  <div v-for="product in store.products" :key="product.id" class="product">-->
<!--    <div class="card w-96 bg-base-100 shadow-xl">-->
<!--          <h2>{{ store.name }}</h2>-->
<!--      <div class="card-body">-->
<!--        <ul>-->
<!--          <li>-->
<!--            <h2 class="card-title">{{ product.name }}</h2>&ndash;&gt;-->
<!--            <figure><img :src="`../src/assets/products/${product.image_name}`" alt="image of product"></figure>-->
<!--            <p>{{ product.description }}</p>-->
<!--            <p><strong>Category:</strong> {{ product.category }}</p>&ndash;&gt;-->
<!--            <p><strong>Price:</strong> {{ product.price }} €</p>-->
<!--            <div class="card-actions justify-end">-->
<!--              <button class="btn btn-primary">Buy Now</button>-->
<!--            </div>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->

</template>

<script>
import { ref, onMounted } from 'vue';
// import { useCartStore } from '@/store/cart'


export default {
  setup() {
    const stores = ref([]);

    onMounted(() => {
      fetch('/stores.json')
        .then(response => response.json())
        .then(data => {
          stores.value = data.stores;
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    });

    return {
      stores
    };
  }
};
</script>
