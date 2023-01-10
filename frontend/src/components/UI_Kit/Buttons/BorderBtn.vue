<script setup>
defineProps({
    to: {
        default: '/',
        type: String
    }
})
</script>
<template>
    <RouterLink to="/"
        class="flex px-11 py-2 min-h-[2rem] justify-center items-center text-xl font-bold rounded-[20px] border-[#676DCA] border">
        <slot></slot>
    </RouterLink>
</template>