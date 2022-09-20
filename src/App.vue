<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>

    <header class="fixed z-30">
        <Header />
    </header>
    <main class="min-h-screen bg-sombre">
        <RouterView />
    </main>
</template>