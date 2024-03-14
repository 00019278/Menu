<script setup lang="ts">

import MainSection from './MainSection.vue'
import { _productStore } from '@/services/product';
import BaseFooter from '@/components/BaseFooter.vue';
import ProductCard from '@/components/ProductCard.vue';
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
