<script setup lang="ts">
import { ref } from 'vue'
import TheModal from './Modal.vue'
import ProductCard from './Card.vue'
import BaseHeader from '@/components/BaseHeader.vue';
import { _productStore, type ProductModel } from '@/services/product';


const _search = ref('');
const _modalRef = ref();
const _activeProducts = ref<ProductModel[]>([]);

function loadItems() {
    _activeProducts.value = _productStore.value
}


function searchProduct(name: string): boolean {
    return name.toUpperCase().includes(_search.value.toUpperCase())
}

function onSearch() {
    _activeProducts.value = [];

    for (const product of _productStore.value) {
        if (searchProduct(product.name.uz)) {
            _activeProducts.value.push(product)
        } else if (searchProduct(product.name.ru)) {
            _activeProducts.value.push(product)
        } else if (searchProduct(product.name.eng)) {
            _activeProducts.value.push(product)
        }
    }
}

function openModal(val: any) {
    _modalRef.value.open(val);
}

loadItems()
</script>




<template>
    <div class="py-5">
        <div class="my_container flex flex-col h-full">
            <div class="relative bg-black border border-[#a8a8a8] rounded-2xl mb-4">
                <base-header />
            </div>

            <div class="flex items-center justify-between mb-10">
                <input v-model="_search" type="search" class="w-[250px] px-4 pr-3 py-2.5 outline-none rounded-lg bg-black text-white" placeholder="Search" @input.enter="onSearch" clearable />

                <button @click="openModal" class="bg-black px-6 py-2.5 text-white font-semibold rounded-lg">Add</button>
            </div>

            <div v-if="_activeProducts.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8">
                <product-card v-for="item in _activeProducts" :key="item.id" :item="item" @update="openModal(item)" @delete="loadItems" />
            </div>

            <div v-else class="py-32">
                <p class="text-center text-xl font-semibold text-black">Nothing here!</p>
            </div>
        </div>


        <the-modal ref="_modalRef" @update="loadItems" />
    </div>
</template>