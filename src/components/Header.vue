<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="flex justify-between items-center w-screen text-white lg:px-40 ">
        <div class="w-[177px]">
            <img src="/CRBX_Logo.png" alt="Logo CRBX">
        </div>
        <ul class="flex gap-6">
            <li>create</li>
            <li>socials</li>
            <li class="flex items-center gap-1">collections
                <ChevronDownIcon class="w-3" />
            </li>
        </ul>
    </div>
</template>