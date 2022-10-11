<script setup>
import Light from '../components/UI_Kit/deco/Lights/Light.vue';
import Background from '../components/UI_Kit/deco/Background.vue';
import FullBtn from '../components/UI_Kit/Buttons/FullBtn.vue';
import BorderBtn from '../components/UI_Kit/Buttons/BorderBtn.vue';
import Stars from '../components/UI_Kit/deco/Stars.vue';
import HomeCards from '../components/UI_Kit/Cards/HomeCards.vue';
import Circle from '../components/UI_Kit/deco/Circle.vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import ItemCards from '../components/UI_Kit/Cards/ItemCards.vue';
import CircleText from '../components/UI_Kit/deco/CircleText.vue';
</script>

<template>
    <div class="lg:px-40">
        <section class="flex justify-between">
            <div class="relative text-white w-5/6 lg:w-1/2">
                <h1 class=" text-4xl font-bold z-10">Welcome to CreateBox,
                    <span class="text-4xl font-bold z-10"> a site that
                        allows you to create unique
                        work !
                    </span>
                </h1>
                <h4 class="text-2xl font-light my-5 z-10">Lörem ipsum teresk polyning, om vosesat. Rilingar dåsk, än
                    lack
                    krorad,
                    inte
                    fafär.
                </h4>
                <div class="flex flex-col md:flex-row gap-8 z-10">
                    <FullBtn>create</FullBtn>
                    <BorderBtn>collections</BorderBtn>
                </div>
                <Light class="-top-12 -left-3 w-36 h-36" />
                <Light class="top-12 left-20 w-36 h-36" />
                <Stars class="absolute -top-12 -right-3 w-10" />
                <Stars class="absolute -left-10 delay" />
            </div>
            <CircleText class="hidden md:flex -translate-y-16" />
        </section>
        <Background class="pt-40" />
        <section>
            <div class="text-white my-28 relative flex w-full justify-center">
                <h2 class="flex justify-center text-4xl font-light gap-2 py-2 px-1 ">
                    How to use
                    <span class="font-bold flex gap-1">
                        CRBX<span class="text-xl relative -top-2">&copy;</span>
                    </span>
                </h2>
                <Circle
                    class="hidden md:block w-60 absolute h-60 stroke-white -top-28 right-1/2 translate-x-[85%] translate-y-4 rotate-12" />
            </div>
            <div class="flex h-fit flex-wrap justify-around gap-x-[5%] gap-y-7">
                <HomeCards :title="'Create your own NFT using the CRBX tool'">CRBX use his own intuitive and creativity
                    generator based on your thought and imagination
                </HomeCards>
                <HomeCards :title="'Let us guide you through our universe'">CRBX use his own intuitive and creativity
                    generator based on your thought and imagination
                </HomeCards>
                <HomeCards :title="'Create your own NFT using the CRBX tool'">CRBX use his own intuitive and creativity
                    generator based on your thought and imagination
                </HomeCards>
            </div>
        </section>
        <section>
            <div class="text-white my-28 relative flex w-full justify-center">
                <h2 class="flex justify-center text-3xl lg:text-4xl font-light gap-2 py-2 px-1 ">
                    Look for a
                    <span class="font-bold flex gap-1">
                        CRBX<span class="text-xl relative -top-2">&copy;</span>
                    </span>
                    collection
                    <!-- <span
                        class="bg-gradient-to-l from-[#555CC5] via-[#676DCA] to-[#6C72CB] h-2 w-full absolute bottom-0 -z-10 left-9">
                    </span> -->
                </h2>
            </div>
            <div class="flex flex-wrap justify-center gap-x-[5%] gap-y-7">
                <ul class="flex text-white justify-between w-1/4">
                    <li class="flex gap-1 liste_container">categories
                        <ChevronDownIcon class="w-3 chevron" />
                    </li>
                    <li class="flex gap-1 liste_container">season
                        <ChevronDownIcon class="w-3 chevron" />
                    </li>
                    <li class="flex gap-1 liste_container">newest
                        <ChevronDownIcon class="w-3 chevron" />
                    </li>
                </ul>
            </div>

            <div
                class="mt-28 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-4/5 lg:w-full gap-x-7 gap-y-10 mx-auto">
                <ItemCards />
                <ItemCards :Img="'/images/temporary/Image-1.png'" />
                <ItemCards :Img="'/images/temporary/Image-2.png'" />
                <ItemCards :Img="'/images/temporary/Image-3.png'" />
                <ItemCards :Img="'/images/temporary/Image-4.png'" />
                <ItemCards :Img="'/images/temporary/Image-5.png'" />
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>