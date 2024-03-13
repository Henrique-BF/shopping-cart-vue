<script setup>
import ProductItem from './ProductItem.vue';

const products = [
  { "id": 1, "name": "Banana", "price": 10.0, "available": 10 },
  { "id": 2, "name": "Apple", "price": 20.0, "available": 15 },
  { "id": 3, "name": "Orange", "price": 30.0, "available": 8 },
  { "id": 4, "name": "Mango", "price": 15.0, "available": 20 }
];
</script>

<template>
  <ProductItem :key="item.id" v-for="item in products" :item="item"/>
  <!-- <ProductItem v-for="item in products" v-bind="{item, key: item.id}"/> -->

</template>
