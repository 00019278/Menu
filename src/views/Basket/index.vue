<script setup lang="ts">
import BasketCard from './Card.vue'
import BaseHeader from '@/components/BaseHeader.vue';
import { _basketProductStore, clearBacket_API } from '@/services/product';

</script>


<template>
    <div class="py-5">
        <div class="my_container flex flex-col h-full">
            <div class="relative bg-black border border-[#a8a8a8] rounded-2xl mb-8">
                <base-header />
            </div>

            <div class="flex items-center justify-between gap-5 mb-5">
                <p class="text-xl lg:text-3xl font-semibold text-black">Your basket</p>
                <p @click="clearBacket_API" class="text-lg lg:text-left font-semibold text-red-500 cursor-pointer">Clear the basket</p>
            </div>

            <div v-if="_basketProductStore.length > 0" class="grid lg:grid-cols-5">
                <div class="lg:col-span-2 p-5 rounded-2xl bg-black">
                    <p class="text-xl font-semibold mb-5 text-white">Products</p>

                    <div class="space-y-3">
                        <basket-card v-for="item in _basketProductStore" :key="item.id" :item="item" />
                    </div>
                </div>
            </div>

            <div v-else class="py-32">
                <p class="text-center text-xl font-semibold text-black">Nothing here! Add some food to show.</p>
            </div>
        </div>
    </div>
</template>