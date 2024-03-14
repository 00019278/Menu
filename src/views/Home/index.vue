<script setup lang="ts">

import MainSection from './MainSection.vue'
import { _productStore, type ProductModel } from '@/services/product';
import BaseFooter from '@/components/BaseFooter.vue';
import ProductCard from '@/components/ProductCard.vue';
import Products_Json from './products.json'

console.log(Products_Json);

if(_productStore.value.length == 0) {
  console.log("yo'q");

  Products_Json.forEach((item: any) => {
    item.id = new Date().getTime();
    _productStore.value.push(item);
  })
}
</script>

<template>
  <div>
    <main-section />

    <section class="py-12 text-black">
      <div class="my_container">
        <p class="text-3xl font-semibold mb-6">Products</p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-6">
          <product-card v-for="item in _productStore" :key="item.id" :item="item"  />
        </div>
      </div>
    </section>

    <base-footer />
  </div>
</template>
