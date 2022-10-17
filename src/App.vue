<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>

    <Header />
    <main class="min-h-screen z-10 relative after:opacity-25 after:lg:opacity-75">
        <RouterView />
    </main>
    <Footer />
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
    background-repeat: space;
}
</style>