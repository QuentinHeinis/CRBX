<script setup>
import { HeartIcon } from '@heroicons/vue/24/outline'
import BorderBtn from '../Buttons/BorderBtn.vue';
defineProps({
    creatorid: {
        type: String,
        default: '@malika_favre'
    },
    avatar: {
        type: String,
        default: '/images/temporary/avatar.png'
    },
    with: {
        type: String,
        default: 'creation title - offf'
    },
    topartiste: { default: false }
})
</script>
<template>
    <div class="max-w-sm  relative rounded-3xl overflow-hidden text-white bg-gradient-to-t">
        <div class="w-80 h-80">
            <span v-if="topartiste" class="font-Sequel-105 flex w-full justify-center pt-7">Top Artiste</span>
        </div>
        <div class="absolute bottom-0 w-full h-1/2 rounded-t-[20px] bg-white backdrop-blur-sm bg-opacity-40 px-9 py-7">
            <div class="relative pt-9">
                <div class="w-32 h-32 rounded-full border overflow-hidden absolute -top-28 left-1/2 -translate-x-1/2">
                    <img :src="avatar" :alt="creatorid" class="object-cover">
                </div>
                <h4 class="text-2xl font-Sequel-45 w-full text-center">{{creatorid}}</h4>
                <p class="font-startup-light text-xs mb-3 w-full text-center">with <span
                        class="font-startup-medium">{{with}}</span></p>
            </div>
        </div>
    </div>
</template>