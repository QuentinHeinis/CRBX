<script setup>
import { HeartIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
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
    Collection: {
        type: String
    },
    Img: {
        type: String,
        default: '/images/temporary/Image.png'
    },
    avatar: {
        type: String,
        default: '/images/temporary/avatar.png'
    },
    id: {
        type: String
    },
    audio: {
        type: String,
        default: ''
    },
    backImg: {
        type: String,
        default: ''
    }

})
let view = ref(false)
</script>
<template>
    <div class="max-w-sm  relative rounded-3xl overflow-hidden text-black" :class="view && `scale-150 z-50`">
        <audio :src="audio" autoplay loop v-if="view"></audio>
        <div class="object-cover w-full h-full relative bg-slate-400">
            <img :src="Img" :alt="title" class="object-cover absolute z-10">
            <img :src="backImg" :alt="title" class="object-cover">
        </div>
        <div
            class="absolute bottom-0 z-20 w-full min-h-[5rem] rounded-t-[20px] bg-white backdrop-blur-sm bg-opacity-40 px-9 py-7">
            <div class="relative">
                <div class="w-14 h-14 rounded-full overflow-hidden absolute -top-16 left-4">
                    <img :src="avatar" :alt="creator" class="object-cover">
                </div>
                <h4 class="text-xs font-Sequel-45">{{ title }} <span v-if="Collection">- {{ Collection }}</span></h4>
                <p class="font-startup-light text-xs mb-3">by {{ creator }}</p>
                <div class="flex gap-4">
                    <button @click="view = !view"
                        class="flex px-4 py-2 min-h-[2rem] font-startup-regular text-white leading-none justify-center items-center text-xs font-bold rounded-[20px] bg-[#676DCA]">
                        See
                        Artwork</button>
                </div>
            </div>
        </div>
    </div>
</template>