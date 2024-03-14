<template>
    <div class="bg-transparent py-5 text-white">
        <div class="my_container">
            <div class="flex items-center justify-between relative z-10">
                <router-link to="/" class="text-3xl uppercase font-bold">Logo</router-link>

                <div class="flex items-center gap-5 lg:gap-8">
                    <router-link to="/about" class="font-semibold text-lg">About Us</router-link>
                    <router-link to="/settings" class="font-semibold text-lg">Settings</router-link>
                    <router-link to="/basket" class="relative"><i class="ri-shopping-basket-line text-2xl"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>