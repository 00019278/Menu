<script setup lang="ts">
import type { PropType } from 'vue';
import { formatNumber_UTIL } from '@/services/utils/format';
import { _basketProductStore, addBacket_API, removeBacket_API, type ProductModel } from '@/services/product';


const props = defineProps({
    item: {
        required: true,
        type: Object as PropType<ProductModel>
    }
})

function increment(item: ProductModel) {
    item.count ++;
    changeBasketItem(item);
    if(item.count == 1) addBacket_API(item);
}

function decrement(item: ProductModel) {
    if(item.count > 1) {
        item.count --;
        changeBasketItem(item);
    } else {
        item.count = 0;
        removeBacket_API(item);
    }
}

function changeBasketItem(item: ProductModel) {
    _basketProductStore.value.forEach((product, index) => {
        if(product.id == item.id) {
            _basketProductStore.value[index] = item;
        }
    })
}
</script>



<template>
    <div class="card bg-black rounded-2xl overflow-hidden text-white">
        <img class="w-full aspect-[9/7] object-cover object-center" :src="item.image" alt="">

        <div class="p-5">
            <h1 class="text-xl font-semibold mb-1">{{ item.name.uz }}</h1>
            <p class="line-clamp-2 break-all mb-4">{{ item.description.uz }}</p>

            <div class="flex items-center justify-between gap-2.5">
                <p class="font-semibold">{{ formatNumber_UTIL(item.price) }} sum</p>

                <div v-if="item.count" class="flex items-center gap-0.5 p-1 bg-white rounded-3xl overflow-hidden">
                    <button @click="decrement(item)" class="px-1"><i class="ri-subtract-line text-xl text-black"></i></button>
                    <p class="min-w-10 text-center text-black">{{ item.count }}</p>
                    <button @click="increment(item)" class="px-1"><i class="ri-add-line text-xl text-black"></i></button>
                </div>
                <button v-else @click="increment(item)" class="px-5 py-2 rounded-[30px] bg-white text-black font-semibold text-sm">Add</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
* {
    transition: 0.37s;
}

.card {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
}

.card:hover {
    transform: translate(4px, -7px) scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
}
</style>