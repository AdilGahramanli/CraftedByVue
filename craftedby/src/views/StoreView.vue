<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

export default {
  setup() {
    const stores = ref([]);
    const route = useRoute();
    const id = route.params.id;
    const selectedArtisan = ref('toto')
    // const storeJson = JSON.parse(stores)

    onMounted(() => {
      fetch('/stores.json')
        .then(response => response.json())
        .then(data => {
          stores.value = data.stores;
          selectedArtisan.value = stores.value.find(item => item.id == id)
          console.log(selectedArtisan.value)
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    });

    return {
      stores, id, selectedArtisan
    };
  }
};
</script>

<template>

<!--  {{ stores[id - 1 ] }}-->
  <h1>{{ selectedArtisan.name }}</h1>
  <p>{{ selectedArtisan.description }}</p>
  <div v-for="product in selectedArtisan.products" :key="product.id">
    {{ product.name }}
    {{product.image_name}}
    {{product.category}}
    {{product.description}}
    {{product.price}}
  </div>



  <p>---------------------------------</p>
<!--  {{ stores }}-->
  <RouterLink to="/cart"> <button> acheter </button> </RouterLink>

<!--  <div v-for="items in stores[id - 1]">-->
<!--    <p>&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
<!--    {{ items["products"] }}-->
<!--  </div>-->

<!--  {{stores[id - 1]}}-->
<!--  <div v-for="store in stores" :key="store.id" class="store" >-->
<!--    <h1>store[{{ $route.params.id }}]</h1>-->
<!--    <h3>{{ $route.params.id }}</h3>-->
<!--    <h4>{{ store[ $route.params.id ] }}</h4>-->
<!--  </div>-->
<!--  {{stores[{{ $route.params.id }}]}}-->
<!--  {{stores.find({{ $route.params.id }} ); }}-->

<!--<h1>{{ stores[id - 1] }}</h1>-->
  <p>-------------------------</p>

<!--  {{ stores[id - 1].name }}-->

<!--<div v-for="store in stores[id - 1]" :key="store.id">-->
<!--  <h1> {{store[0]}}</h1>-->
<!--</div>-->
<!--  <h1>Object.values({{ stores[id - 1]}}).forEach(element => element.name }}</h1>-->

<!--  <h1>{{ // stores[id - 1].name }}</h1>-->


<!--<div v-for="store in stores" :key="store.id" class="store">-->
<!--  <h1>{{stores[store.id]}}</h1>-->
<!--  <p>-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->

<!--</div>-->

</template>

<style scoped>

</style>