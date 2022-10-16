<script setup>
import { HeartIcon } from '@heroicons/vue/24/outline'
import BorderBtn from '../Buttons/BorderBtn.vue';
defineProps({
    fav: {
        type: Boolean,
        default: false
    },
    creator: {
        type: String,
        default: 'unknown'
    },
    title: {
        type: String,
        default: "3D NFT"
    },
    FromCollection: {
        type: Boolean,
        default: true
    },
    Collection: {
        type: String,
        default: 'OFFF'
    },
    Img: {
        type: String,
        default: '/images/temporary/Image.png'
    },
    avatar: {
        type: String,
        default: '/images/temporary/avatar.png'
    }

})
</script>
<template>
    <div class="max-w-sm  relative rounded-3xl overflow-hidden text-black">
        <img :src="Img" :alt="title" class="object-cover">
        <div class="w-11 h-11 rounded-full bg-white bg-opacity-40 flex justify-center center absolute top-5 right-5"
            @click="fav=!fav">
            <HeartIcon class="w-6 stroke-white" :class="{'fill-red-600 stroke-red-600' : fav}" />
        </div>
        <div class="absolute bottom-0 w-full min-h-[5rem] rounded-t-[20px] bg-white bg-opacity-40 px-9 py-7">
            <div class="relative">
                <div class="w-14 h-14 rounded-full overflow-hidden absolute -top-16 left-4">
                    <img :src="avatar" :alt="creator" class="object-cover">
                </div>
                <h4 class="text-xs font-Sequel-45">{{title}} <span v-if="FromCollection">- {{Collection}}</span></h4>
                <p class="font-startup-light text-xs mb-3">by {{creator}}</p>
                <div class="flex gap-4">
                    <a href="https://opensea.io/"
                        class="flex px-4 py-2 min-h-[2rem] font-startup-regular text-white leading-none justify-center items-center text-xs font-bold rounded-[20px] bg-[#676DCA]">Look
                        on Opensea</a>
                    <BorderBtn :to="'/'" class="text-[0.62rem] font-startup-regular leading-none px-5 text-black">See
                        Artwork
                    </BorderBtn>
                </div>
            </div>
        </div>
    </div>
</template>