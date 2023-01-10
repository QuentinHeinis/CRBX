<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import { user } from '@/supabase'
import { openai } from '@/openai'
import { sound } from '@/freesound'
import Draw from './components/Draw.vue';
console.log(sound);
console.log(openai);

console.log({ user });

</script>

<template>

    <Header :user="user" />
    <main class="min-h-screen z-10 relative after:opacity-25 after:lg:opacity-75">
        <RouterView v-slot="{ Component, route }">
            <transition name="out-in">
                <component :is="Component" :key="route.path" />
            </transition>
        </RouterView>
    </main>
    <Footer />
</template>

<style scoped>
.route-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.route-enter-active {
    transition: all 0.3 ease-out;
}

.route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}

.route-leave-active {
    transition: all .3s ease-in;
}

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