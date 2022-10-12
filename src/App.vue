<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/layout/Header.vue';
</script>

<template>

    <Header />
    <main class="min-h-screen pt-32 z-10 relative">
        <RouterView />
    </main>
</template>

<style>
main::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: calc(100% - 100vh);
    width: 100%;
    display: block;
    box-sizing: border-box;
    background-image: url('/images/bg.webp');
    background-size: contain;
    z-index: -10;
}
</style>