<script setup lang="ts">
import type { PropType } from 'vue';
import { formatNumber_UTIL } from '@/services/utils/format';
import { deleteProduct_API, type ProductModel } from '@/services/product';


const emit = defineEmits(['update', 'delete']);
const props = defineProps({
    item: {
        required: true,
        type: Object as PropType<ProductModel>
    }
})

function deleteItem() {
    deleteProduct_API(props.item);
    emit('delete');
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

                <div class="flex items-center gap-2.5">
                    <div @click="emit('update')" class="w-8 h-8 rounded-md bg-white flex items-center justify-center cursor-pointer">
                        <i class="ri-edit-2-line text-black text-xl"></i>
                    </div>
                    <div @click="deleteItem" class="w-8 h-8 rounded-md bg-white flex items-center justify-center cursor-pointer">
                        <i class="ri-delete-bin-line text-black text-xl"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>