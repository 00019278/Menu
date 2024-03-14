<script setup lang="ts">
import { type PropType } from 'vue';
import { type ProductModel } from '@/services/product';
import { formatNumber_UTIL } from '@/services/utils/format';


const props = defineProps({
    item: {
        required: true,
        type: Object as PropType<ProductModel>
    }
})
</script>


<template>
    <div class="flex items-center justify-between gap-5">
        <div class="flex items-center gap-2.5">
            <img class="w-14 h-14 rounded-md object-cover object-center border border-[#a8a8a8]" :src="item.image" alt="">
            <div>
                <p class="text-white text-lg font-semibold">{{ item.name.uz }}</p>
                <p class="text-white font-medium">{{ formatNumber_UTIL(item.price) }} so'm</p>
            </div>
        </div>
        <div class="w-9 h-9 rounded-full rounded-br-none border border-[#a8a8a8] flex items-center justify-center">
            <p class="text-lg text-white font-semibold">{{ item.count }}</p>
        </div>
    </div>
</template>