<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'

</script>

<template>
    <div class="p-3 bg-white relative">
        <div class="main_section rounded-2xl overflow-hidden lg:max-h-[800px]" style="width: 100%; height: calc(100vh - 24px);">
            <base-header />

            <div class="my_container flex justify-end h-full p-6">
                <div class="relative z-10 max-w-[600px]">
                    <p class="text-[80px] md:text-[100px] lg:text-[120px] 2xl:text-[150px] leading-[110%] font-semibold">WIUT</p>

                    <div class="mt-12 space-y-8">
                        <p class="text-2xl mb-10 lg:mb-20">“Here, at Wiut, in the center of Tashkent, we don’t accept compromises. Not about our food. All our ingredients are sourced from local producers to ensure quality and freshness.</p>

                        <div class="grid md:grid-cols-2 items-center gap-5 lg:gap-8 mt-auto">
                            <div class="p-4 lg:p-6 rounded-2xl cursor-pointer border border-[#a8a8a8] bg-[#969696]/25">
                                <p class="text-2xl font-semibold text-center">Contact</p>
                            </div>

                            <div class="p-4 lg:p-6 rounded-2xl cursor-pointer border border-[#a8a8a8] bg-[#969696]/25">
                                <p class="text-2xl font-semibold text-center">About Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
  backdrop-filter: blur(5px);
}


@media (max-width: 768px){
  .main_section::after {
    max-height: 100%;
  }
}
</style>