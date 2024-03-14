<template>
    <div class="bg-white text-black lg:py-5 xl:py-10">
        <div class="my_container">
            <div class="grid lg:grid-cols-9 gap-5 lg:gap-8">
                <div class="lg:col-span-5">
                    <h1 class="text-2xl lg:text-3xl xl:text-5xl font-semibold mb-5 lg:mb-10">History of our restaurant</h1>

                    <p class="text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus eos nostrum, praesentium ipsa amet esse quam beatae unde ex? Similique doloremque pariatur a earum assumenda <br> <br> commodi odio aliquid ea! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p class="text-lg lg:text-xl hidden xl:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus eos nostrum, praesentium ipsa amet esse quam beatae unde ex? Similique <br> <br> doloremque pariatur a earum assumenda commodi odio aliquid ea! Lorem ipsum dolor sit amet consectetur adipisicing elit.  Explicabo minus eos nostrum, praesentium ipsa amet esse quam beatae unde ex?</p>
                </div>

                <div class="lg:col-span-4 aspect-square p-5 lg:p-10">
                    <img class="circle_img w-full h-full object-cover object-center" src="https://www.shutterstock.com/image-photo/black-burger-french-fries-on-260nw-639998467.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.circle_img {
    clip-path: circle(50% at 50% 50%);
}
</style>