<template>
    <div class="bg-white p-3">
        <div class="bg-black rounded-2xl py-5 lg:py-10">
            <div class="my_container">
                <h1 class="text-2xl lg:text-3xl xl:text-5xl font-semibold mb-5 text-center text-white">Our partners</h1>
                <p class="text-lg max-w-[800px] text-center mx-auto mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima <br>  sequi quidem fugiat magnam non cum excepturi modi eveniet nobis delectus, architecto molestias?</p>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    <div v-for="item in 6" :key="item">
                        <div class="rounded-2xl border border-[#888888] bg-[#969696]/25 p-6 cursor-pointer">
                            <i class="ri-lightbulb-flash-line text-5xl block text-center mb-2 text-white"></i>
                            <h2 class="text-xl lg:text-3xl font-semibold text-center mb-5">Smart Light</h2>
                            <p class="text-center px-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, reprehenderit. Alias fuga illo iste, harum a sapiente distinctio natus!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>