<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/layout/Header.vue';
</script>

<template>

    <Header />
    <main class="min-h-screen pt-32 z-10">
        <RouterView />
    </main>
</template>