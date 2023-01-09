<script setup>
import CircleText from '../components/UI_Kit/deco/CircleText.vue';
import FullBtn from '../components/UI_Kit/Buttons/FullBtn.vue';
import BorderBtn from '../components/UI_Kit/Buttons/BorderBtn.vue';
import ItemCards from '../components/UI_Kit/Cards/ItemCards.vue';
import { user, signout } from '@/supabase'
const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>
<template>
    <div class="lg:px-40 lg:pt-32 overflow-x-hidden text-white">
        <section class="flex flex-col items-center gap-4 relative">
            <h1 class="font-startup-light text-4xl bg-[#676DCA] w-fit py-5 px-10">Create your <span
                    class="font-Sequel-45">NFT</span>
            </h1>
            <div class="flex flex-col w-2/3" v-if="user">
                <span class="self-end font-startup-light text-xl">CRBX&copy;</span>
                <canvas class="bg-[#242424] w-full">

                </canvas>
                <div class="flex w-full justify-between mt-3 items-center">
                    <input type="text" class="w-1/3 bg-[#24242462] text-xs px-4 py-2 border"
                        placeholder="enter a word...">
                    <button
                        class="flex px-11 py-2 min-h-[2rem] justify-center items-center text-xl font-bold rounded-[20px] bg-[#676DCA] ">finish</button>
                </div>
            </div>
            <div v-else class="">
                <h3 class="font-sequel-45 text-2xl uppercase">you must be logged in to create</h3>
            </div>
            <CircleText class="absolute -top-10 -left-10 -z-10" />

        </section>
        <section class="mt-10">
            <h2 class="font-Sequel-45 text-3xl bg-[#676DCA] w-fit py-2 px-4">
                How does it works?
            </h2>
            <p class="font-startup-light text-2xl">
                CRBX use a program that we develop, using the line that you draw it will automatically make a 3D
                generated model of it, and then, the word your gonna associate with your drawing will influence the
                generating of the image in a certain way wich will make your NFT unique
            </p>
            <div class="flex gap-8 z-10 flex-wrap">
                <FullBtn class="text-xs md:text-2xl font-Sequel-45">create</FullBtn>
                <BorderBtn class="text-xs md:text-2xl font-startup-light">collections</BorderBtn>
            </div>
        </section>
        <section class="px-3 md:px-10">
            <div class="text-white my-28 relative flex w-full md:justify-center">
                <h2 class="flex justify-center text-xl md:text-4xl font-light gap-2 py-2 px-1 font-startup-light">
                    Latest NFT
                    <span class="font-bold flex gap-1 font-Sequel-45">
                        generated
                    </span>
                    <span aria-hidden class="w-2/5 h-[2px] bg-white absolute left-0 bottom-0"></span>
                </h2>
            </div>
            <div
                class="mt-28 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-4/5 lg:w-full gap-x-7 gap-y-10 mx-auto">
                <ItemCards :FromCollection="false" :Collection="'machin'" class="mx-auto" />
                <ItemCards :Img="'/images/temporary/Image-1.png'" class="mx-auto" />
                <ItemCards :Img="'/images/temporary/Image-2.png'" class="mx-auto" />
            </div>
        </section>
        <div class="w-full flex justify-center mt-48 mb-28">
            <button class="font-startup-light text-xl text-white" @click="goTop">Back to top</button>
        </div>
    </div>
</template>