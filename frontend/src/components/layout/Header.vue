<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
const props = defineProps({
    user: { type: Object, default: () => { } }
})
const menuOpen = ref(false)
const switchMenu = () => {
    menuOpen.value = !menuOpen.value
    console.log(menuOpen.value);
}
</script>

<template>
    <header
        class="flex justify-between items-center max-w-screen text-white px-9 lg:px-40 z-20 h-16 lg:h-[82px] relative">
        <router-link to="/" class="w-24 hidden md:block md:w-[177px]">
            <img src="/images/logos/CRBX_Logo.png" alt="Logo CRBX">
        </router-link>
        <nav class="fixed right-4 md:right-9 lg:right-40 ">
            <div class="flex relative z-50 md:hidden w-8 h-3 flex-col justify-between" @click="switchMenu">
                <span class="w-full h-[2px] bg-white transition-all" :class="menuOpen && `rotate-45`"></span>
                <span class="w-2/3 h-[2px] bg-white self-end transition-all"
                    :class="menuOpen && `w-full -rotate-45 absolute`"></span>
            </div>
            <ul class="fixed flex flex-col justify-center top-0 bottom-0 left-0 right-0 bg-sombre translate-x-full transition-all md:translate-x-0 md:flex-row md:relative gap-6 items-center "
                :class="menuOpen && `translate-x-0 md:translate-x-0`">
                <li class="md:hidden">
                    <RouterLink @click="switchMenu" to="/">home</RouterLink>
                </li>
                <li>
                    <RouterLink @click="switchMenu" to="/create">create</RouterLink>
                </li>
                <li>
                    <RouterLink @click="switchMenu" to="/socials">socials</RouterLink>
                </li>
                <li>
                    <RouterLink @click="switchMenu" to="/collection">collection</RouterLink>
                </li>
                <li v-if="user">
                    <RouterLink @click="switchMenu" to="Profil">
                        <img src="/images/Profil.svg" alt="">
                    </RouterLink>
                </li>
                <li v-else>
                    <RouterLink @click="switchMenu" to="/login">
                        <img src="/images/Profil.svg" alt="">
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
nav .chevron {
    transition: rotate .4s ease;
}

nav .liste_container:hover .chevron {
    rotate: 180deg;
}

nav .liste {
    visibility: hidden;
    opacity: 0;
    top: 0%;
    transition: .4s ease-in-out;
}

nav .liste_container:hover .liste {
    visibility: visible;
    opacity: 1;
    top: 100%;
    transition: .4s ease-in-out;
}
</style>