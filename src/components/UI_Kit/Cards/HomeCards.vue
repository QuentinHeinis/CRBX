<script setup>
defineProps({
    title: {
        default: 'aaaaaaaaaaaaaaaaaa',
        type: String
    },
    content: {
        default: 'CRBX ©Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deleniti cum reiciendis quis quisquam consequuntur aliquid nostrum.',
        type: String
    },

})
</script>
<template>
    <div
        class="bg-[#96969641] relative backdrop-blur-md w-80 lg:w-[500px] min-h-[14rem] rounded-t-[20px] rounded-b-3xl text-white px-8 py-3 pb-6 flex flex-col justify-between gap-3">
        <h3 class="text-2xl font-Sequel-45 w-full">{{title}}</h3>
        <p class="text-xl w-full font-startup-light">
            <slot></slot>
        </p>
        <span aria-hidden class="w-1/3 h-[2px] bg-white"></span>
    </div>
</template>