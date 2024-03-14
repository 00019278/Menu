<script setup lang="ts">

import SectionTwo from './SectionTwo.vue';
import MainSection from './MainSection.vue'
import SectionThree from './SectionThree.vue';
import BaseFooter from '@/components/BaseFooter.vue';
</script>


<template>
    <div class="space-y-10">
        <main-section />

        <section-two />
        <section-three />

        <base-footer />
    </div>
</template>