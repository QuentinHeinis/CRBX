<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
const menuOpen = ref(false)
const switchMenu = () => {
    menuOpen.value = !menuOpen.value
}
</script>

<template>
    <header class="flex justify-between items-center w-screen text-white px-9 lg:px-40 z-20 h-16 lg:h-[82px] relative">
        <router-link to="/" class="w-24 hidden md:block md:w-[177px]">
            <img src="/images/logos/CRBX_Logo.png" alt="Logo CRBX">
        </router-link>
        <nav class="fixed right-4 md:right-9 lg:right-40 ">
            <div class="flex md:hidden w-8 h-3 flex-col justify-between" @click="switchMenu">
                <span class="w-full h-[2px] bg-white"></span>
                <span class="w-2/3 h-[2px] bg-white self-end"></span>
            </div>
            <ul class="hidden md:flex gap-6">
                <li>
                    <RouterLink to="/create">create</RouterLink>
                </li>
                <li>
                    <RouterLink to="/socials">socials</RouterLink>
                </li>
                <li>
                    <RouterLink to="/three">
                        threeJs
                    </RouterLink>
                </li>
                <li class="flex items-center gap-1 relative liste_container">collections
                    <ChevronDownIcon class="w-3 chevron" />
                    <ul class="absolute w-full liste">
                        <li>
                            <RouterLink to="/collection/offf">offf</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/collection/mmi">mmi</RouterLink>
                        </li>
                    </ul>
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
    bottom: 0;
    transition: .4s ease-in-out;
}

nav .liste_container:hover .liste {
    visibility: visible;
    opacity: 1;
    bottom: -200%;
    transition: .4s ease-in-out;
}
</style>