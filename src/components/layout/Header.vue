<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <header class="flex justify-between items-center w-screen text-white lg:px-40 z-20 h-[82px] relative">
        <router-link to="/" class="w-[177px] absolute">
            <img src="/images/logos/CRBX_Logo.png" alt="Logo CRBX">
        </router-link>
        <nav class="fixed right-40 ">
            <ul class="flex gap-6">
                <li>create</li>
                <li>socials</li>
                <li class="flex items-center gap-1 relative liste_container">collections
                    <ChevronDownIcon class="w-3 chevron" />
                    <ul class="absolute w-full liste">
                        <li>offf</li>
                        <li>mmi</li>
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