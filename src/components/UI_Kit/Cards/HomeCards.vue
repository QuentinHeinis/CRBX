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
        class="bg-[#96969641] relative backdrop-blur-md w-80 min-h-[14rem] rounded-t-[20px] rounded-b-3xl text-white px-8 py-3 pb-6 flex flex-col justify-between gap-3">
        <h3 class="text-2xl font-semibold w-full">{{title}}</h3>
        <p class="text-xl w-full">
            <slot></slot>
        </p>
        <div class="flex h-10 items-center absolute -bottom-6">
            <span class="h-4 w-4 border-r-2 border-t-2 rotate-45"></span>
            <span class="h-4 w-4 border-r-2 border-t-2 rotate-45"></span>
            <span class="h-4 w-4 border-r-2 border-t-2 rotate-45"></span>
        </div>
    </div>
</template>