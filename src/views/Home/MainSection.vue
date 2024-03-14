<script setup lang="ts">
import { ref } from 'vue'
import BaseHeader from '@/components/BaseHeader.vue'

const img_1 = ref()
const img_2 = ref()
const img_3 = ref()
const _activeImg = ref()

img_1.value = 'https://images3.alphacoders.com/922/922680.jpg';
img_2.value = 'https://wallpaperbat.com/img/497258-burgers-wallpaper.jpg';
img_3.value = 'https://c4.wallpaperflare.com/wallpaper/397/728/966/burger-4k-downloading-for-pc-wallpaper-preview.jpg';
_activeImg.value = 'https://c4.wallpaperflare.com/wallpaper/984/944/941/burger-french-fries-hamburger-wallpaper-preview.jpg';

function changeImg(img: string, index: number) {
  if(index == 1) {
    img_1.value = _activeImg.value;
  } else if(index == 2) {
    img_2.value = _activeImg.value;
  } else if(index == 3) {
    img_3.value = _activeImg.value;
  }
  _activeImg.value = img;
}
</script>

<template>
  <div class="p-3 bg-white relative">
    <div class="main_section bg-black rounded-2xl flex flex-col overflow-hidden md:max-h-[800px]" style="width: 100%; height: calc(100vh - 24px);">
      <base-header />
      
      <div class="flex-auto flex flex-col lg:flex-row gap-10 w-full h-full p-5 lg:p-10 border-t border-[#a8a8a8] relative z-10 overflow-hidden">
        <!-- Left -->
        <div class="w-full lg:w-[200px] lg:h-full shrink-0 flex flex-row lg:flex-col justify-around gap-5 border border-[#a8a8a8] rounded-2xl p-5 bg_blur">
          <div class="w-[100px] lg:w-full aspect-square border border-[#a8a8a8] rounded-xl bg-[#969696]/25 flex items-center justify-center">
            <i class="ri-goblet-2-fill text-6xl"></i>
          </div>
          <div class="w-[100px] lg:w-full aspect-square border border-[#a8a8a8] rounded-xl bg-[#969696]/25 flex items-center justify-center">
            <i class="ri-restaurant-fill text-6xl"></i>
          </div>
          <div class="w-[100px] lg:w-full aspect-square border border-[#a8a8a8] rounded-xl bg-[#969696]/25 flex items-center justify-center">
            <i class="ri-cake-fill text-6xl"></i>
          </div>
        </div>
  
        <!-- Center -->
        <div class="w-full h-full border border-[#a8a8a8] rounded-2xl bg_blur overflow-hidden">
          <img class="w-full h-full object-cover object-center" :src="_activeImg" alt="" :key="Math.random()">
        </div>
  
        <!-- Right -->
        <div class="w-full lg:w-[200px] lg:h-full shrink-0 flex flex-row lg:flex-col justify-around gap-5 border border-[#a8a8a8] rounded-2xl p-5 bg_blur">
          <div @click="changeImg(img_1, 1)" class="w-[100px] lg:w-full aspect-square cursor-pointer border border-[#a8a8a8] rounded-xl bg-[#969696]/25 overflow-hidden">
            <img class="w-full h-full object-cover object-center" :src="img_1" alt="" :key="img_1">
          </div>
          <div @click="changeImg(img_2, 2)" class="w-[100px] lg:w-full aspect-square cursor-pointer border border-[#a8a8a8] rounded-xl bg-[#969696]/25 overflow-hidden">
            <img class="w-full h-full object-cover object-center" :src="img_2" alt="" :key="img_2">
          </div>
          <div @click="changeImg(img_3, 3)" class="w-[100px] lg:w-full aspect-square cursor-pointer border border-[#a8a8a8] rounded-xl bg-[#969696]/25 overflow-hidden">
            <img class="w-full h-full object-cover object-center" :src="img_3" alt="" :key="img_3">
          </div>
        </div>
  
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg_blur {
  backdrop-filter: blur(15px);
}

.main_section {
  background: url('https://img.pikbest.com/wp/202344/assorted-an-assortment-of-various-fast-food-items-on-a-textured-gray-table_9906835.jpg!sw800') no-repeat center;
  background-size: cover;
}

.main_section::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  overflow: hidden;
  max-height: 800px;
  border-radius: 16px;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  backdrop-filter: blur(10px);
}

@media (max-width: 768px){
  .main_section::after {
    max-height: 100%;
  }
}
</style>